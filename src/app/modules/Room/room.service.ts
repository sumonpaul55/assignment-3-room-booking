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
  // const { amenities, ...restData } = payLoad;
  const result = await Rooms.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const roomsServices = {
  creatRooms,
  getAllRoomsFromDb,
  getAroomsFromDb,
  updateRoomsIntoDb,
};
