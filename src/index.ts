import express, { Application, Request, Response } from "express";
// import * as route from "./routers";
import { connectDb } from "./database/database";

const app: Application = express();

app.use(express.json()).get("/health", (_req: Request, res: Response) => res.send("OK!"));
//   .use("/user", route.user);

export function init(): Promise<express.Application> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
