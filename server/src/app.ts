import express, { Application, Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { rootRouter } from "./rootRouter";

export const app: Application = express();

app.use(helmet());
app.use(cors<Request>());
app.use(bodyParser.json());

app.use("/", rootRouter);
