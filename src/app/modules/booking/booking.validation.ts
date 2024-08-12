import { z } from "zod";

const bookingValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: "Room Id is required" }),
    slots: z.array(z.string()),
    user: z.string({ required_error: "User Id is require" }),
    date: z.date({ required_error: "booking date is required" }),
    totalAmount: z.number({ required_error: "Total amount of selected slot" }),
    isConfirmed: z.enum(["confirmed", "unconfirmed", "canceled"], { required_error: "Confirmation status is required" }),
    isDeleted: z.boolean(),
  }),
});

export const bookingValidation = {
  bookingValidationSchema,
};
