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
// get all rooms

const getAllRooms = catchAsync(async (req, res) => {
  const result = await roomsServices.getAllRoomsFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All room retrieved successfully",
    data: result,
  });
});
// get a rooms
const getArooms = catchAsync(async (req, res) => {
  const result = await roomsServices.getAroomsFromDb(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Room retrieved successfully",
    data: result,
  });
});

export const roomsController = {
  createRooms,
  getAllRooms,
  getArooms,
};
