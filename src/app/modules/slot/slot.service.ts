import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

const addSlotDb = async (payload: TSlot) => {
  const result = await Slot.create(payload);
  return result;
};
export const slotService = {
  addSlotDb,
};
