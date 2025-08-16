import { PrismaClient } from "./lib/generated/prisma/index.js"; // <- use index.js

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
