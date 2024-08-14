import httpStatus from "http-status";
import AppError from "../../erros/AppError";
import { Rooms } from "../Room/room.model";
import { TBooking } from "./booking.interface";
import { Bookings } from "./booking.model";
import { Slot } from "../slot/slot.model";
import { User } from "../User/user.model";

const addBookingDb = async (payload: TBooking) => {
  const isExistRoom = await Rooms.findById(payload.room);
  if (!isExistRoom) {
    throw new AppError(httpStatus.NOT_FOUND, "Room not found");
  }
  const slotPrice = isExistRoom?.pricePerSlot;
  payload.totalAmount = slotPrice * payload.slots.length;

  const result = await Bookings.create(payload);
  const newBookingId = result._id;
  const lastBookinged = await Bookings.findById(newBookingId).populate("room").populate("slots").populate("user");
  return lastBookinged;
};
const getAllBookingFromDb = async () => {
  const result = await Bookings.find({ isDeleted: false }).populate("room").populate("slots").populate("user");
  return result;
};

const getMyBookings = async (payload: string) => {
  // get the user First
  const userData = await User.findOne({ email: payload, isDeleted: false });
  const userId = userData?._id;
  const result = await Bookings.findOne({ user: userId }).populate("room").populate("slots").populate("user");
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "No Data found");
  }
  return result;
};
const updateBookingDb = async (id: string, payload: TBooking) => {
  await Bookings.findByIdAndUpdate(id, payload, { new: true });
  const bookedi = await Bookings.findById(id).populate("room").populate("slots").populate("user");
  return bookedi;
};
const deleteBookingDb = async (id: string) => {
  // confirm bookings is exist
  const isExist = await Bookings.findById(id);
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "No Booking Found");
  }
  const result = await Bookings.findByIdAndUpdate(id, { isDeleted: true }, { new: true, runValidators: true });
  return result;
};
export const bookingService = {
  addBookingDb,
  getAllBookingFromDb,
  getMyBookings,
  updateBookingDb,
  deleteBookingDb,
};
