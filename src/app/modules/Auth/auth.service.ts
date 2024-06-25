import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";

const signUpIntoDb = async (payLoad: TUser) => {
  const result = await User.create(payLoad);
  return result;
};
export const authServices = {
  signUpIntoDb,
};
