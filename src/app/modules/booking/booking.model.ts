import mongoose, { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingModelSchema = new Schema<TBooking>({
  room: { type: Schema.Types.ObjectId, required: true, unique: true },
  slots: [{ type: Schema.Types.ObjectId }],
  user: { type: Schema.Types.ObjectId, required: [true, "User Id is required"] },
  date: { type: Date, required: [true, "date is required"] },
  totalAmount: { type: Number, required: [true, "total amount of selected slot"] },
  isConfirmed: { enum: ["confirmed", "unconfirmed", "canceled"] },
  isDeleted: Boolean,
});

export const Bookings = model<TBooking>("Bookings", bookingModelSchema);
