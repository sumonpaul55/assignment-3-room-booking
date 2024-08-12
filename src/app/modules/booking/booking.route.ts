import { Router } from "express";
import validateRequest from "../../middileWare/validateRequest";
import { bookingValidation } from "./booking.validation";
import { bookingController } from "./booking.controller";

const router = Router();

router.post("/", validateRequest(bookingValidation.bookingValidationSchema), bookingController.addBooking);

export const bookingsRouter = router;
