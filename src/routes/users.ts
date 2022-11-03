import { Router } from "express";
import User from "../models/user";
import { UserSchema } from "../interface";
import { UserService } from "../services/user.services";
import { validateParams } from "../middleware/validate";

export const userRoutes = Router();

//Get All User
userRoutes.get("/", async (req, res) => {
  const users = new UserService();
  try {
    res.json(await users.getUsers());
  } catch (e) {
    console.log(e);
  }
});

//Create User
userRoutes.post("/", async (req, res) => {
  const validator: UserSchema = {
    first_name: "string",
    last_name: "string",
    email: "string",
    phone: "string",
    is_active: true,
  };

  if (!validateParams(req.body, validator))
    res.status(400).json({
      status: "failed",
      message: "Bad Request",
    });

  const body: User = req.body;
  const user = new UserService();
  try {
    res.json(await user.createUser(body));
  } catch (e) {
    console.log(e);
  }
});
