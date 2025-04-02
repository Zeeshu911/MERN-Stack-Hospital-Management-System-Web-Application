import React from "react";
import Hero from "../components/Hero";
import HospitalQueue from "../components/queue";

const Queue = () => {
  return (
    <>
      <Hero
        title={"See where you are in the queue | iPhysioperth"}
        imageUrl={"/signin.png"}
      />
      <HospitalQueue/>
    </>
  );
};

export default Queue;
