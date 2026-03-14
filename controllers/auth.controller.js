import { AppError } from "../lib/app.error.js";
import {
  userSigninValidation,
  userSignupValidation,
} from "../lib/validators/user.validator.js";
import { AuthService } from "../services/auth.service.js";

export const signUp = async (req, res) => {
  console.log(req);
  const validationResult = await userSignupValidation.safeParseAsync(req.body);

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error });
  }

  try {
    const token = await AuthService.signUp(validationResult.data);
    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.code).json({ error: err.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  const validationResult = await userSigninValidation.safeParseAsync(req.body);

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error });
  }

  try {
    const token = await AuthService.signIn(validationResult.data);
    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.code).json({ error: err.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
