import { TUser } from "./user.interface";
import { User } from "./user.model";

const getAllUsersFromDb = async () => {
  const result = await User.create();
  return result;
};

export const userServices = {
  getAllUsersFromDb,
};
