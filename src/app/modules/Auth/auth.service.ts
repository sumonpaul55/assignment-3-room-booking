import httpStatus from "http-status";
import AppError from "../../erros/AppError";
import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";
import { TLogin, tokenPayload } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";
import { AnyExpression } from "mongoose";

const signUpIntoDb = async (payLoad: TUser) => {
  const result = await User.create(payLoad);
  return result;
};
const loginDb = async (payLoad: TLogin) => {
  // check user exist
  const existingUser: AnyExpression = await User.find({ email: payLoad.email });
  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, `User not found with this ${payLoad.email}`);
  }
  const tokenPayload: tokenPayload = {
    email: payLoad.email,
    role: existingUser?.role,
  };
  const token = createToken(tokenPayload, config.Access_Token_Secret as string, config.JWT_ACCESS_EXPIRE_IN as string);

  const result = { existingUser, token };
  return result;
};
export const authServices = {
  signUpIntoDb,
  loginDb,
};
