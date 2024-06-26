import { startSession } from "mongoose";
import { TRooms } from "./room.interface";
import { Rooms } from "./room.model";
import AppError from "../../erros/AppError";
import httpStatus from "http-status";

const creatRooms = async (payLoad: TRooms) => {
  const result = await Rooms.create(payLoad);
  return result;
};
// get a rooms
const getAllRoomsFromDb = async () => {
  const result = await Rooms.find();
  return result;
};
// get a rooms
const getAroomsFromDb = async (id: string) => {
  const result = await Rooms.findById(id);
  return result;
};
// update rooms into db
const updateRoomsIntoDb = async (id: string, payLoad: TRooms) => {
  const { amenities, ...restData } = payLoad;
  const session = await startSession();
  try {
    session.startTransaction();
    const result = await Rooms.findByIdAndUpdate(id, restData, {
      new: true,
      runValidators: true,
      session,
    });

    if (amenities && amenities.length > 0) {
      await Rooms.findByIdAndUpdate(id, { amenities: amenities }, { new: true, runValidators: true, session });
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to update");
  }
};
export const roomsServices = {
  creatRooms,
  getAllRoomsFromDb,
  getAroomsFromDb,
  updateRoomsIntoDb,
};
