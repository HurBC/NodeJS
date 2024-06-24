import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas";
import { clientSchema } from "../schemas/clientsSchemas";
import { createClient, getClients } from "../controllers/clients";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.post("/client", validateSchema(clientSchema), createClient);
router.get("/client", authRequired, getClients);

export default router;
