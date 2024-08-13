import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingService } from "./booking.service";

const addBooking = catchAsync(async (req, res) => {
  const result = await bookingService.addBookingDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});
const getAllBooking = catchAsync(async (req, res) => {
  const reslut = await bookingService.getAllBookingFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: reslut,
  });
});

export const bookingController = {
  addBooking,
  getAllBooking,
};
