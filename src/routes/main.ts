import { Router } from "express";
import { userRoutes } from "./users";
export const routes = Router();

routes.use("/user", userRoutes);
