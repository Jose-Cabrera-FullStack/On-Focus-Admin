const apiSessions = require("../api/apiSessions");
const publicIp = require('public-ip');

export const loginUser = (username, password, ip, redirectUrl) => {
  const payload = { username, password, ip }

  apiSessions
  .createSession(payload)
  .then((res) => {
    document.cookie = `username=${username}`;
    document.cookie = `token=${res._id}`;
    window.location.href = redirectUrl
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
    window.location.href = "http://localhost:9001/#/admin/"
  })
  .catch((err) => {
    console.log(err);
  });

};

export const ipAddress = () => publicIp.v4();

const sessionActions = {
  loginUser,
  logoutSession,
  ipAddress
}

export default sessionActions