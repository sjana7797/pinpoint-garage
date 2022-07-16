import type { NextApiRequest, NextApiResponse } from "next";
import { closePrisma, getGarages, postGarage } from "../../../api/garages";
import { Garage } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, address, phone, image, time } = req.body;
      await postGarage(name, address, phone, image, time);
      res.status(201).send({ message: "uploaded", status: true });
    } catch (error) {
      console.error(error);
    } finally {
      await closePrisma();
    }
  }
}
