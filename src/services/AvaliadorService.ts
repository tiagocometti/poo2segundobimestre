import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliadorService {
  constructor() {}

  async listAvaliadores(id?: string) {
    try {
      if (id) {
        const avaliadorId = parseInt(id);
        const avaliador = await prisma.avaliador.findUnique({
          where: {
            id: avaliadorId,
          },
        });
        return avaliador;
      } else {
        const avaliadores = await prisma.avaliador.findMany();
        return avaliadores;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createAvaliador(avaliador: Prisma.AvaliadorCreateInput) {
    try {
      const newAvaliador = await prisma.avaliador.create({
        data: avaliador,
      });
      return newAvaliador;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateAvaliador(id: string, avaliador: Prisma.AvaliadorUpdateInput) {
    try {
      const updatedAvaliador = await prisma.avaliador.update({
        where: {
          id: parseInt(id),
        },
        data: avaliador,
      });
      return updatedAvaliador;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteAvaliador(id: string) {
    try {
      const deletedAvaliador = await prisma.avaliador.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedAvaliador;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AvaliadorService();
