import { genSalt, hash } from "bcrypt";
import { Table, Column, Model, BeforeCreate } from "sequelize-typescript";

@Table
class User extends Model {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  is_active: boolean;
}

export default User;
