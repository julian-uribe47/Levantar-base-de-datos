-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
