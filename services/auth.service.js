import { createHmac, randomBytes } from "crypto";
import { JWT_SECRET, signToken } from "../lib/auth-token.js";
import { User } from "../models/user.model.js";
import { hash } from "../utils/hash.js";

export class AuthService {
  static async signUp(data) {
    const {
      firstName,
      lastName,
      email,
      mobile,
      skill,
      password,
      role,
      company,
    } = data;
    const salt = randomBytes(16).toString("hex");
    console.log("sign updata:", data);

    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        mobile,
        skill,
        password: hash(password, salt),
        salt,
        role,
        company,
      });

      const token = signToken({ id: user.id, role: user.role });
      return token;
    } catch (err) {
      console.error("Error during sign up:", err);
      throw err;
    }
  }

  static async signIn(data) {
    const { userId, password } = data;

    let user = await User.findOne({ email: userId });

    if (!user) {
      user = await User.findOne({ mobile: userId });
    }

    if (!user || hash(password, user.salt) !== user.password) {
      throw new AppError("User Id or password is wrong!");
    }

    const token = signToken({ id: user.id, role: user.role });
    console.log(token);
    return token;
  }

  static async validateToken(token) {
    try {
      jsonwebtoken.verify(token, JWT_SECRET);
      return true;
    } catch (err) {
      return false;
    }
  }
}
