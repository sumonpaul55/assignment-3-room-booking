import { z } from "zod";

const addSlotValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: "room id needed" }),
    date: z.date({ required_error: "slot date is required" }),
    startTime: z.string({ required_error: "Need a start time" }),
    endTime: z.string({ required_error: "End Time needed" }),
  }),
});
export const slotValidation = {
  addSlotValidationSchema,
};
