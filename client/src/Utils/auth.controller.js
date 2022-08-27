import jwt from "jsonwebtoken";

export const isAuthenticated = () => {
  const token = localStorage.getItem("user-token");
  if (!token) return false;
  if (token) {
    const { exp } = jwt.decode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("user-token");
      return false;
    }
  }
  return true;
};

export const isAdmin = () => {
  const token = localStorage.getItem("user-token");
  if (isAuthenticated()) {
    const decoded = jwt.decode(token);
    if (decoded.user.role === "admin") return true;
  }
  return false;
};
export const isMusicband = () => {
  const token = localStorage.getItem("user-token");
  if (isAuthenticated()) {
    const decoded = jwt.decode(token);
    if (decoded.user.role === "musicband") return true;
  }
  return false;
};
export const isPlace = () => {
  const token = localStorage.getItem("user-token");
  if (isAuthenticated()) {
    const decoded = jwt.decode(token);
    if (decoded.user.role === "place") return true;
  }
  return false;
};

export const getUserInfo = () => {
  const token = localStorage.getItem("user-token");
  const decoded = jwt.decode(token);
  return decoded.user;
};
