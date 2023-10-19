import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.user.create({
      data: {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
      },
    });

    console.log("Dados de seed criados com sucesso!");
  } catch (error) {
    console.error("Erro ao criar dados de seed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export default seed;
