import { Router } from "express";
import { login, logout, register } from "../controllers/auth";
import { validateSchema } from "../middlewares/validateSchemas";
import { loginSchema, userSchema } from "../schemas/usersSchemas";

const router = Router();

router.post("/register", validateSchema(userSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

export default router;
