import prisma from "../../db";

export const getContact = async () => {
  return prisma.contact.findMany();
};

export const createContact = async (data: { email: string; name: string, tel: string, company?: string, message: string }) => {
  return prisma.contact.create({
    data,
  });
};
