import { Request, Response } from "express";
import httpStatus from "http-status";
import * as service from "../services/user.service";
import { CustomError } from "../models";

export const signup = async (req: Request, res: Response) => {
  try {
    await service.signup();
    res.status(httpStatus.CREATED).json("Usuário criado com sucesso");
  } catch (err) {
    if (err instanceof CustomError) {
      res.status(err.status).send(err.message);
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro desconhecido");
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    await service.signin();
    res.status(httpStatus.OK).json("Usuário logado com sucesso");
  } catch (err) {
    if (err instanceof CustomError) {
      res.status(err.status).send(err.message);
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro desconhecido");
    }
  }
};
