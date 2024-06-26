import { Router } from "express";
import validateRequest from "../../middileWare/validateRequest";
import { roomValidation } from "./room.validation";
import { roomsController } from "./room.controller";
import authGuared from "../../middileWare/authGuared";
import { USER_ROLE } from "../User/user.constant";

const router = Router();

router.post("/", authGuared(USER_ROLE.admin), validateRequest(roomValidation.createRoomsValidationSchema), roomsController.createRooms);
router.get("/", roomsController.getAllRooms);
router.get("/:id", roomsController.getArooms);
export const roomRoutes = router;
