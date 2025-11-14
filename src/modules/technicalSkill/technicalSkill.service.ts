import prisma from "../../db";

export const getTechnicalSkill = async () => {
  return prisma.technicalSkill.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
