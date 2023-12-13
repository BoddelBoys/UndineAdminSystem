"use client";
import React from "react";
import BoatTable from "~/app/_components/boatDetails";
import { MockBoatData } from "~/types/boattypes";

const BoatPage = () => {
  // Retrieve your array of BoatData objects using the mock function
  const boatDataArray = MockBoatData();

  // Render the BoatTable component and pass the entire array of boat data as a prop
  return (
    <div style={{ backgroundColor: "lightpurple" }}>
      <BoatTable boats={boatDataArray} />
    </div>
  );
};

export default BoatPage;
