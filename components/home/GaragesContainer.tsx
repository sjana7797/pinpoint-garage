import { Garage } from "@prisma/client";
import GarageCard from "../ui/GarageCard";

type Props = { garages: Garage[] };

function GaragesContainer({ garages }: Props) {
  return (
    <section className="my-5 flex flex-col gap-10 px-5 md:px-10 lg:px-14">
      <h2 className="text-3xl font-medium italic tracking-wide md:text-5xl">
        Garages
      </h2>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-y-hidden">
        {garages.map((garage) => (
          <GarageCard garage={garage} key={garage.id} />
        ))}
      </div>
    </section>
  );
}

export default GaragesContainer;
