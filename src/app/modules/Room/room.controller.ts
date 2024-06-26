import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { roomsServices } from "./room.service";

const createRooms = catchAsync(async (req, res) => {
  const result = await roomsServices.creatRooms(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Room added successfully",
    data: result,
  });
});

export const roomsController = {
  createRooms,
};
