import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas";
import {
	addressSchema,
	updateAddressSchema,
} from "../schemas/localitysSchemas";
import {
	createAddress,
	getCommunes,
	updateAddress,
} from "../controllers/localitys";

const router = Router();

router.post("/address", validateSchema(addressSchema), createAddress);
router.put("/address/:id", validateSchema(updateAddressSchema), updateAddress);
router.get("/address/communes", getCommunes);

export default router;
