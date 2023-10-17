import express, { Application, Request, Response } from "express";
import cors from "cors";
import * as route from "./routers";
import { connectDb } from "./database/database";

const app: Application = express();

app
  .use(express.json())
  .use(cors())
  .get("/health", (_req: Request, res: Response) => res.send("OK!"))
  .use("/user", route.userRoute)
  .use("/route", route.routeRoute);

export function init(): Promise<express.Application> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
