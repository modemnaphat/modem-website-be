import prisma from "../../db";

export const getProject = async () => {
  return prisma.project.findMany({
    include: {
      skills: {
        select: {
          id: true,
          name: true,
          iconUrl: true,
          level: true,
        }
      },
    }
  });
};
