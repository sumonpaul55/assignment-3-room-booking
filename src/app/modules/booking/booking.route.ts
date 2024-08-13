import { Router } from "express";
import validateRequest from "../../middileWare/validateRequest";
import { bookingValidation } from "./booking.validation";
import { bookingController } from "./booking.controller";
import authGuared from "../../middileWare/authGuared";
import { USER_ROLE } from "../User/user.constant";

const router = Router();

router.post("/", authGuared(USER_ROLE.user), validateRequest(bookingValidation.bookingValidationSchema), bookingController.addBooking);

export const bookingsRouter = router;
