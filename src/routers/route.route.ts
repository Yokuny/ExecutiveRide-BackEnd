import { Router } from "express";
import * as controller from "../controllers/route.controller";
import { getDistanceSchema } from "../schemas";
import { validateBody, authenticateToken } from "../middlewares";

const routeRoute = Router();

routeRoute.post("/distance", authenticateToken, validateBody(getDistanceSchema), controller.getDistance);

export { routeRoute };
