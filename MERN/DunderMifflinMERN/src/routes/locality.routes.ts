import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas";
import { addressSchema } from "../schemas/locality";
import { createAddress, getAllAddresses } from "../controllers/localitys";

const router = Router();

router.post("/address", validateSchema(addressSchema), createAddress);
router.get("/address", getAllAddresses);

export default router;
