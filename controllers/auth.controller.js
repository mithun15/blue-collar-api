import { AuthService } from "../services/auth.service.js";

export const signIn = async (req, res) => {
  const { mobile } = req.body;
  const user = await AuthService.signIn({ mobile });

  return res.status(200).json({ data: user });
};

export const patchUser = async (req, res) => {
    
}
