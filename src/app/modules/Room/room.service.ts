import { TRooms } from "./room.interface";
import { Rooms } from "./room.model";

const creatRooms = async (payLoad: TRooms) => {
  const result = await Rooms.create(payLoad);
  return result;
};
export const roomsServices = {
  creatRooms,
};
