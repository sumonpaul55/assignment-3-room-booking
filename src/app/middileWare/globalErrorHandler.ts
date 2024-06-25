import { ErrorRequestHandler } from "express";
import config from "../config";
import { TErrorSources } from "../interface/error";

const globalErrorhandler: ErrorRequestHandler = (err, req, res, next) => {
  // message = err.message;
  // errorSources = [
  //   {
  //     path: "",
  //     message: err?.message,
  //   },
  // ];
  const statusCode = err.statusCode ? err.statusCode : 500;

  return res.status(statusCode).json({
    success: false,
    err,
    // stack: config.NODE_ENV === "development" && err?.stack,
  });
};

export default globalErrorhandler;
