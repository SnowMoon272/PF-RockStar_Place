import jwt from "jsonwebtoken";

export const decodeCookieInfo = async (token) => {
  if (!token) return "No token";
  const { user } = await jwt.decode(token);
  return user;
};

export const f = {};
