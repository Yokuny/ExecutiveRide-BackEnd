import * as respository from "../repositories";
import { CustomError } from "../models";

export const signup = async () => {
  try {
    return await respository.signup({ name: "teste", email: "a@a.com", password: "teste123" });
  } catch (err) {
    throw new CustomError("Erro ao criar usuário", 500);
  }
};

export const signin = async () => {
  try {
    return await respository.signin({ email: "a@a.com", password: "teste123" });
  } catch (err) {
    throw new CustomError("Erro ao logar usuário", 500);
  }
};
