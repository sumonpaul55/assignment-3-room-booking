import express from "express";
import { authRoutes } from "../modules/Auth/auth.route";
import { userRouters } from "../modules/User/user.route";
const router = express.Router();

const moudleRoute = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRouters,
  },
];

moudleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
