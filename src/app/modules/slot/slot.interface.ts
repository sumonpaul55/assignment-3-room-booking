import { z } from "zod";
import { slotValidation } from "./slot.validation";
import mongoose from "mongoose";

export type TSlot = {
  date: Date;
  room: mongoose.Types.ObjectId;
  startTime: string;
  endTime: string;
};

// type TSlots = z.infer<typeof slotValidation.addSlotValidationSchema>;
