import { Application, NextFunction, Request, Response } from "express";
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/errorHandlers";

export const mainApp = (app: Application) =>{
    try {
        app.get("/", (req: Request, res: Response) => {
            try {
                return res.status(200).json({
                    message: "Hello"
                })
            } catch (error) {
                return res.status(404).json({
                    message: "Invalid"
                })
            }
        })

        app.all("*", (req: Request, res: Response, next: NextFunction) => {
            next(
                new mainError({
                    name: "Route Error",
                    message: `This route ${req.originalUrl} does not exist`,
                    status: HTTP.BAD,
                    success: false
                })
            )
        })

        app.use(errorHandler)

    } catch (error) {
        return error
    }
}