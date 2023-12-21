"use client";
import React from "react";
import BoatTable from "~/app/_components/boatDetails";
import { MockBoatData } from "~/types/boattypes";

const BoatPage = () => {
  const boatDataArray = MockBoatData();

  return (
    <div style={{ backgroundColor: "white" }}>
      <BoatTable boats={boatDataArray} />
    </div>
  );
};

export default BoatPage;
