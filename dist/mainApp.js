"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainError_1 = require("./error/mainError");
const errorHandlers_1 = require("./error/errorHandlers");
const mainApp = (app) => {
    try {
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "Hello"
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Invalid"
                });
            }
        });
        app.all("*", (req, res, next) => {
            next(new mainError_1.mainError({
                name: "Route Error",
                message: `This route ${req.originalUrl} does not exist`,
                status: mainError_1.HTTP.BAD,
                success: false
            }));
        });
        app.use(errorHandlers_1.errorHandler);
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
