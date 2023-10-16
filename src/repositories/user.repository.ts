import { prisma } from "../database";
import type { newUser, loginUser } from "@/models";

export const signup = (data: newUser) => {
  return prisma.user.create({ data });
};

export const signin = (data: loginUser) => {
  return prisma.user.findUnique({
    where: { email: data.email },
  });
};
