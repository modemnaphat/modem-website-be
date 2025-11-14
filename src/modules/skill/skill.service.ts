import prisma from "../../db";

export const getSkill = async () => {
  return prisma.skill.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
