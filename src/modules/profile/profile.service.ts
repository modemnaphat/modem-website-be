import prisma from "../../db";

export const getProfile = async () => {
  return prisma.profile.findUnique({
    where: { id: 1 },
  });
};
