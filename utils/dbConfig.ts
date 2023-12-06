import mongoose from "mongoose"
import dotEnv from "dotenv"
dotEnv.config()

// const URL: string  = process.env.DATABASE_STRING! ;
const URL: string  = "mongodb+srv://danieleromonsele01:daniel123@cluster0.abnlgn4.mongodb.net/" ;

export const dbConfig = ()=>{
    try {
    mongoose.connect(URL).then(()=>{
        console.log("DB connection established");
        
    })
    } catch (error:any) {
       return error.message
    }
}