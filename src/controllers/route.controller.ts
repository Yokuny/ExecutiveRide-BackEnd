import { Request, Response } from "express";
import httpStatus from "http-status";
import * as service from "../services/route.service";
import { CustomError } from "../models";

export const getDistance = async (req: Request, res: Response) => {
  try {
    const response = await service.getDistance(req.body);
    return res.status(httpStatus.CREATED).json(response);
  } catch (err) {
    if (err instanceof CustomError) {
      res.status(err.status).send(err.message);
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro desconhecido");
    }
  }
};
