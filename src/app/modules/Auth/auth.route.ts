import express from "express";
import validateRequest from "../../middileWare/validateRequest";
import { userValidations } from "../User/user.validation";
import { authController } from "./auth.controller";

const router = express.Router();

router.post("/signup", validateRequest(userValidations.createUserValidationSchma), authController.signUp);
router.post("/login");

export const authRoutes = router;
