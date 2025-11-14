import prisma from "../../db";

export const getTool = async () => {
  return prisma.tool.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
