import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleCastError = (err: mongoose.Error.CastError) => {
  const errorSource: TErrorSources = [
    {
      path: err?.path,
      message: err.message,
    },
  ];
  const statusCode = 500;
  return {
    statusCode,
    message: "Invalid ID",
    errorSource: errorSource,
  };
};
export default handleCastError;
