import apiSessions from "../api/apiSessions";
import publicIp from "public-ip";

export const loginUser = async (username, password) => {
  let ip;
  ip = await ipAddress();

  const payload = { username, password, ip };

  const login = await apiSessions
    .createSession(payload)
    .then((res) => {
      document.cookie = `username=${res.data.data.username}`;
      document.cookie = `token=${res.data.data._id}`;
      return true;
    })
    .catch((err) => {
      return false;
    });
    
  return login;
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

export const ipAddress = async () => await publicIp.v4();

const sessionActions = {
  loginUser,
  logoutSession,
  ipAddress,
  checkSession,
  getCookie,
};

export default sessionActions;
