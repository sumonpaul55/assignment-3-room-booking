import { Router } from "express";
import validateRequest from "../../middileWare/validateRequest";
import { roomValidation } from "./room.validation";
import { roomsController } from "./room.controller";
import authGuared from "../../middileWare/authGuared";

const router = Router();

router.post("/", validateRequest(roomValidation.createRoomsValidationSchema), roomsController.createRooms);

export const roomRoutes = router;
