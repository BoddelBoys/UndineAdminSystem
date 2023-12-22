"use client";
import { useState } from "react";
import Link from "next/link";
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
      if (currentPage >= Math.ceil(data.length / 10)) return;
      newPage = currentPage + 1;
    } else {
      if (currentPage === 1) return;
      newPage = currentPage - 1;
    }

    setShownData(data.slice((newPage - 1) * 10, newPage * 10));
    setCurrentPage(newPage);
  };
  return (
    <div className="w-[50%]">
      <div className="overflow-x-auto">
        <div className="grid grid-cols-12">
          <button
            className={"btn btn-primary mr-2"}
            disabled={currentPage === 1 ? true : false}
            onClick={() => {
              console.log(currentPage);
              handleClick(false);
            }}
          >
            back
          </button>
          <button
            className="btn btn-primary ml-2"
            disabled={currentPage >= Math.ceil(data.length / 10) ? true : false}
            onClick={() => {
              console.log(currentPage);
              handleClick(true);
            }}
          >
            next
          </button>
          <div className="col-span-8"></div>
          <div className="col-span-2 align-text-bottom">
            {(currentPage - 1) * 10 + 1}-
            {currentPage * 10 <= data.length ? currentPage * 10 : data.length}{" "}
            of {data.length}
          </div>
        </div>
        <table className="table text-center">
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
                  <Link
                    href="/boatdetails"
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  >
                    Boatsystems
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoatSystems;
