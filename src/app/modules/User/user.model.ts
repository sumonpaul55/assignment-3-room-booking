import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserModelSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export const User = model<TUser>("User", UserModelSchema);
