import { Request } from "express";

interface UserSchema {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  is_active: boolean;
}

interface reqAuthentication extends Request {
  user: number;
}

interface LoginInterface {
  email: string;
  password: string;
}

export { UserSchema, reqAuthentication, LoginInterface };
