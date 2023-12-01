import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Criação de um novo grupo
  const newGroup = await prisma.group.create({
    data: {
      nome: 'Grupo A',
      resumo: 'Ideia do Grupo A',
      nota: 0.0,
    },
  });
  console.log('Novo grupo criado: ', newGroup);

  // Criação de um novo aluno
  const newAluno = await prisma.aluno.create({
    data: {
      matricula: 2023001,
      nome: 'João',
      nota: 0.0,
      grupoId: newGroup.id,
    },
  });
  console.log('Novo aluno criado: ', newAluno);

  // Criação de um novo avaliador
  const newAvaliador = await prisma.avaliador.create({
    data: {
      nome: 'Dr. Silva',
      notas: 0.0,
      grupos: {
        connect: {
          id: newGroup.id,
        },
      },
    },
  });
  console.log('Novo avaliador criado: ', newAvaliador);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });