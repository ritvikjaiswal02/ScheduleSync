// testConnection.js
const { PrismaClient } = require("./lib/generated/prisma");
require("dotenv").config();

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connection successful");
    await prisma.$disconnect();
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

testConnection();
