import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GroupService {
  constructor() {}

  async listGroups(id?: string) {
    try {
      if (id) {
        const groupId = parseInt(id);
        const group = await prisma.group.findUnique({
          where: {
            id: groupId,
          },
        });
        return group;
      } else {
        const groups = await prisma.group.findMany();
        return groups;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createGroup(group: Prisma.GroupCreateInput) {
    try {
      const newGroup = await prisma.group.create({
        data: group,
      });
      return newGroup;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateGroup(id: string, group: Prisma.GroupUpdateInput) {
    try {
      const updatedGroup = await prisma.group.update({
        where: {
          id: parseInt(id),
        },
        data: group,
      });
      return updatedGroup;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteGroup(id: string) {
    try {
      const deletedGroup = await prisma.group.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedGroup;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new GroupService();
