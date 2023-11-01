-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "CURP" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Citas" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Citas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_CURP_key" ON "User"("CURP");

-- CreateIndex
CREATE UNIQUE INDEX "Citas_fecha_userId_key" ON "Citas"("fecha", "userId");

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "Citas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
