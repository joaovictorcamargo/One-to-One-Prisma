import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso exelente de react Native",
      duration: 300,
      teacher: {
        connect: {
          id: "7823d7ed-a8ba-4d2f-9665-98f2a637989e",
        },
      },
    },
  });
  console.log(result);
}

main();
