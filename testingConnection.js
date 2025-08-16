const { PrismaClient } = require("./lib/generated/prisma");
require("dotenv").config();

const prisma = new PrismaClient();

async function testingConnection() {
  try {
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("✅ Connection successful!");
    await prisma.$disconnect();
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  }
}

testingConnection();
