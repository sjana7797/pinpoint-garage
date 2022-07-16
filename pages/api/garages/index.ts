import type { NextApiRequest, NextApiResponse } from "next";
import { getGarages } from "../../../api/garages";
import { Garage } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  garages: Garage[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const garages = await getGarages();
    res.status(200).json({ garages });
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
