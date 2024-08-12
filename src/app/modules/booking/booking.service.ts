import { TBooking } from "./booking.interface";
import { Bookings } from "./booking.model";

const addBookingDb = async (payload: TBooking) => {
  const result = await Bookings.create(payload);
  return result;
};

export const bookingService = { addBookingDb };
