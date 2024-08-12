import { Router } from "express";
import validateRequest from "../../middileWare/validateRequest";
import { slotValidation } from "./slot.validation";
import { slotController } from "./slot.controller";

const router = Router();

router.post("/", validateRequest(slotValidation.addSlotValidationSchema), slotController.addSlot);

export const slotRoute = router;
