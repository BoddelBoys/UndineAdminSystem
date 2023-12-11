"use client";
import { useState } from "react";
import { BoatSystemDTO } from "~/types/datatypes";

interface BoatSystemsProps {
  data: BoatSystemDTO[];
}

const BoatSystems = (props: BoatSystemsProps) => {
  const { data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [shownData, setShownData] = useState<BoatSystemDTO[]>(
    data.slice(0, 10),
  );

  const handleClick = (nextpage: boolean) => {
    let newPage = currentPage;

    if (nextpage) {
      if (currentPage === Math.floor(data.length / 10)) return;
      newPage = currentPage + 1;
    } else {
      if (currentPage === 1) return;
      newPage = currentPage - 1;
    }

    setShownData(data.slice((newPage - 1) * 10, newPage * 10));
    setCurrentPage(newPage);
  };
  return (
    <div className="overflow-x-auto">
      <div>
        <button
          className="btn btn-primary mr-2"
          onClick={() => {
            console.log(currentPage);
            handleClick(false);
          }}
        >
          back
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            console.log(currentPage);
            handleClick(true);
          }}
        >
          next
        </button>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount of Entities</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shownData.map((entry) => (
            <tr key={entry.boatSystemId}>
              <td>{entry.boatSystemId}</td>
              <td>{entry.name}</td>
              <td>{entry.amountOfEntities}</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoatSystems;
