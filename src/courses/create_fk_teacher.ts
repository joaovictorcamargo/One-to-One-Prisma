import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React JS",
      description: "Curso exelente de ReactJS",
      duration: 300,
      fk_id_teacher: "f54541ad-6623-4cfc-8a3f-4346ba1a5e8f",
    },
  });
  console.log(result);
}

main();
