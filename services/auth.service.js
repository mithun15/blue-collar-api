import { User } from "../models/user.model.js";

export class AuthService {
  static async signIn(data) {
    const { mobile } = data;

    let user = await User.findOne({ mobile });

    if (!user) {
      try {
        user = await User.create({ mobile });
      } catch (err) {
        throw err;
      }
    }

    return { loggedIn: true, user };
  }
}
