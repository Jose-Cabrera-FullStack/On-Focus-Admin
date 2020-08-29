const apiSessions = require("../api/apiSessions");
const publicIp = require("public-ip");

export const loginUser = (username, password, ip, redirectUrl) => {
  const payload = { username, password, ip };

  apiSessions
    .createSession(payload)
    .then((res) => {
      document.cookie = `username=${username}`;
      document.cookie = `token=${res._id}`;
      window.location.href = redirectUrl;
    })
    .catch((err) => {
      alert(err);
    });
};

export const logoutSession = (id) => {
  apiSessions
    .logoutSession(id)
    .then((res) => {
      document.cookie = `username=  ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    })
    .then(() => {
      window.location.href = "/admin";
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCookie = (name) => {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
};

export const checkSession = () => {
  const cookieUsername = getCookie("username");

  if (!cookieUsername) {
    return false;
  } else {
    return true;
  }
};

export const ipAddress = () => publicIp.v4();

const sessionActions = {
  loginUser,
  logoutSession,
  ipAddress,
  checkSession,
  getCookie,
};

export default sessionActions;
