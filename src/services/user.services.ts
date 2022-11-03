import User from "../models/user";
import bcrypt from "bcrypt";
import CustomResponse from "../middleware/response";
import { LoginInterface } from "../interface"

export class UserService {
  async getUsers() {
    const data = await User.findAll();
    const res = new CustomResponse();

    return res.successful(data).response();
  }

  async createUser(params) {
    const user = User.build(params);

    const hashPasswordSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(params.password, hashPasswordSalt);

    user.password = hashPassword;
    await user.save();

    const res = new CustomResponse();

    return res.successful(user.toJSON()).response();
  }

 async loginUser(params: LoginInterface ){

  
  const { email, password} = params
  const user = await User.findAll({where:{
    email: email
  }})
  const res = new CustomResponse()
  if (user.length == 0){
    return res.notFound().response()
  }
  const hashPassword = user.password!

  
 }
}
