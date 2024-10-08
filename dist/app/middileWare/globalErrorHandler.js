"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../erros/handleZodError"));
const handleValidationError_1 = __importDefault(require("../erros/handleValidationError"));
const handleCastError_1 = __importDefault(require("../erros/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../erros/handleDuplicateError"));
const AppError_1 = __importDefault(require("../erros/AppError"));
const globalErrorhandler = (err, req, res, next) => {
    let statusCode = err.statusCode ? err.statusCode : 500;
    let message = "Something went wrong";
    let errorSource = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simpliFiedError = (0, handleZodError_1.default)(err);
        statusCode = simpliFiedError.statusCode;
        message = simpliFiedError.message;
        errorSource = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const simpliFiedError = (0, handleValidationError_1.default)(err);
        statusCode = simpliFiedError.statusCode;
        message = simpliFiedError.message;
        errorSource = simpliFiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSource = simplifiedError.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSource = simplifiedError.erroSource;
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSource = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    if (err instanceof AppError_1.default) {
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
exports.default = globalErrorhandler;
