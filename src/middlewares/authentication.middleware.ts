import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

import { prisma } from "../database";
import { AuthenticatedRequest, JWTPayload } from "../models";

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) return unauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return unauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!session) return unauthorizedResponse(res);

    req.userId = userId;

    return next();
  } catch (err) {
    return unauthorizedResponse(res);
  }
};

function unauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send("Não autorizado");
}
