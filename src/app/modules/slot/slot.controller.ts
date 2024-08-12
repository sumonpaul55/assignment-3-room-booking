import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotService } from "./slot.service";

const addSlot = catchAsync(async (req, res) => {
  const result = await slotService.addSlotDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});

export const slotController = {
  addSlot,
};
