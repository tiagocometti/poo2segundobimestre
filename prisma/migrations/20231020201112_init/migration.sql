-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL PRIMARY KEY 
    "nome" TEXT NOT NULL,
    "ideia" TEXT NOT NULL,
    "nota" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" INTEGER NOT NULL PRIMARY KEY 
    "nome" TEXT NOT NULL,
    "nota" REAL NOT NULL,
    "grupoId" INTEGER NOT NULL,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Group" ("id")
);

-- CreateTable
CREATE TABLE "Avaliador" (
    "id" INTEGER NOT NULL PRIMARY KEY 
    "nome" TEXT NOT NULL,
    "notas" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "_AvaliadorToGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AvaliadorToGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Avaliador" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AvaliadorToGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "Group" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_nome_key" ON "Group"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_AvaliadorToGroup_AB_unique" ON "_AvaliadorToGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_AvaliadorToGroup_B_index" ON "_AvaliadorToGroup"("B");
