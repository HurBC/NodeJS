import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas";
import { registerSchema } from "../schemas/user";
import { getQuery, getUsers, register } from "../controllers/users";

const router = Router();

router.post("/users", validateSchema(registerSchema), register);
router.get("/users", getUsers);
// router.put("/users", updateUser);
router.get("/users-by", getQuery);

export default router;