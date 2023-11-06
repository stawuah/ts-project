import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import connectDB from "./config/connect";
import { AuthRoute } from "./router/authenticationRoute";
connectDB();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/auth", AuthRoute);
const server = http.createServer(app);

server.listen(3030, () => {
  console.log("sever is listening on http://localhost:3030/");
});
