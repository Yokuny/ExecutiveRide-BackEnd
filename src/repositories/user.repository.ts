import { prisma } from "../database";
import type { NewUser } from "../models";

export const signup = (data: NewUser) => {
  return prisma.user.create({ data });
};

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const sessionToken = (userId: number, token: string) => {
  return prisma.session.create({ data: { userId, token } });
};

