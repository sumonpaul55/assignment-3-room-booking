import express from "express";
import { authRoutes } from "../modules/Auth/auth.route";
const router = express.Router();

const moudleRoute = [
  {
    path: "/auth",
    route: authRoutes,
  },
];

moudleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
