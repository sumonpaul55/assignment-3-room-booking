import { ErrorRequestHandler } from "express";
import config from "../config";
import { TErrorSources } from "../interface/error";

const globalErrorhandler: ErrorRequestHandler = (err, req, res, next) => {
  // set default values
  let statusCode = 500;
  let message = "Something went wrong";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  message = err.message;
  statusCode = err.statusCode;
  errorSources = [
    {
      path: "",
      message: err?.message,
    },
  ];

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.NODE_ENV === "development" && err?.stack,
  });
};

export default globalErrorhandler;
