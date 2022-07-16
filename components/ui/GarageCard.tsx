import { Garage } from "@prisma/client";
import React from "react";
import { DEFAULT_GARAGE_URL } from "../../configs/app";

type Props = {
  garage: Garage;
};

function GarageCard({ garage }: Props) {
  const { address, id, image, name, phone, time } = garage;
  return (
    <div className="card-compact card glass w-96 min-w-[17rem] snap-center bg-base-100 shadow-xl">
      <figure>
        <img
          src={image === "NA" ? DEFAULT_GARAGE_URL : image}
          alt={name.toLowerCase()}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{address}</p>
        <div className="card-actions mt-2 justify-end">
          <button className="btn btn-primary btn-sm">Visit Now</button>
        </div>
      </div>
    </div>
  );
}

export default GarageCard;
