import jsonwebtoken from "jsonwebtoken";

export const JWT_SECRET = "somerandomtoken";

if (!JWT_SECRET || JWT_SECRET === "") {
  throw new Error("JWT_SECRET env is required");
}

export const signToken = (payload) => {
  const token = jsonwebtoken.sign(payload, JWT_SECRET);

  return token;
};

export const verifyToken = (token) => {
  try {
    const payload = jsonwebtoken.verify(token, JWT_SECRET);

    return payload;
  } catch (err) {
    return null;
  }
};
