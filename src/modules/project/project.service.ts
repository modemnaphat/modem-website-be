import prisma from "../../db";

export const getProject = async () => {
  return prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      skills: {
        select: {
          id: true,
          name: true,
          iconUrl: true,
        },
      },
    },
  });
};
