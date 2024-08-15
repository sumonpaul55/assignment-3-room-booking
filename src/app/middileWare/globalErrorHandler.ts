import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import handleZodError from "../erros/handleZodError";
import { TErrorSources } from "../interface/error";
import validateRequest from "./validateRequest";
import handleValidationError from "../erros/handleValidationError";
import handleCastError from "../erros/handleCastError";
import handleDuplicateError from "../erros/handleDuplicateError";
import AppError from "../erros/AppError";

const globalErrorhandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode ? err.statusCode : 500;
  let message = "Something went wrong";
  let errorSource: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];
  if (err instanceof ZodError) {
    const simpliFiedError = handleZodError(err);
    statusCode = simpliFiedError.statusCode;
    message = simpliFiedError.message;
    errorSource = simpliFiedError?.errorSource;
  } else if (err?.name === "ValidationError") {
    const simpliFiedError = handleValidationError(err);
    statusCode = simpliFiedError.statusCode;
    message = simpliFiedError.message;
    errorSource = simpliFiedError.errorSource;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSource;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.erroSource;
  } else if (err instanceof Error) {
    message = err.message;
    errorSource = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  if (err instanceof AppError) {
    return res.status(statusCode).json({
      success: false,
      statusCode: statusCode,
      message,
      data: [],
      // stack: config.NODE_ENV === "development" && err?.stack,
    });
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    err,
    // stack: config.NODE_ENV === "development" && err?.stack,
  });
};

export default globalErrorhandler;
