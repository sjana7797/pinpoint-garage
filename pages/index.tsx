import { Garage } from "@prisma/client";
import type { GetServerSideProps } from "next";
import GaragesContainer from "../components/home/GaragesContainer";
import Hero from "../components/home/Hero";
import { apiAxios } from "../utils/apiAxios";

type Props = { garages: Garage[] };

const Home = ({ garages }: Props) => {
  return (
    <>
      <Hero />
      <GaragesContainer garages={garages} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await apiAxios.get("garages");
    const garages = await response.data.garages;
    return { props: { garages } };
  } catch (error) {
    console.error(error);
  }
  return { props: {} };
};
