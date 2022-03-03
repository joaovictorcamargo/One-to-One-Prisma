import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Elixir",
      description: "Curso exelente de elixir",
      duration: 500,
      teacher: {
        create: {
          name: "Rafa Camarda",
        },
      },
    },
  });
  console.log(result);
}

main();
