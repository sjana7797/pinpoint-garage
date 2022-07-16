import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getGarages = async () => {
  await prisma.$connect();
  const garages = await prisma.garage.findMany();
  return garages;
};

export const postGarage = async (
  name: string,
  address: string,
  phone: number,
  image: string,
  time: string
) => {
  await prisma.$connect();
  await prisma.garage.create({
    data: {
      name,
      address,
      phone,
      time,
      image,
    },
  });

  return true;
};

export const closePrisma = async () => {
  await prisma.$disconnect();
};
