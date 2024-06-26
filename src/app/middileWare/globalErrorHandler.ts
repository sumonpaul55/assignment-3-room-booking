import { ErrorRequestHandler } from "express";

const globalErrorhandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode ? err.statusCode : 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || err.AppError,
    err,
    // stack: config.NODE_ENV === "development" && err?.stack,
  });
};

export default globalErrorhandler;
