import express, { Application } from "express"
import cors from "cors"
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const port: number | string = process.env.PORT || 4444
const app: Application = express()

app.use(cors());
app.use(express.json());

mainApp(app)

app.listen(port, ()=>{
    // console.log("listening on port" + port);
    dbConfig()
    
})
