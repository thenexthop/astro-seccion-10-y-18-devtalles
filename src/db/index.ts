import { PrismaClient } from "../generated/prisma/client";
import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({
    connectionString: import.meta.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
    adapter,
});