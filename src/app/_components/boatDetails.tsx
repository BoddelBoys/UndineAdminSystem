import React, { useState } from "react";
import type { BoatData } from "~/types/boattypes";

interface BoatDetailsProps {
  boats: BoatData[];
}

type LogType =
  | "bmsLogs"
  | "chargerLogs"
  | "coreMCULogs"
  | "motorLogs"
  | "throttleLogs";

const BoatTable: React.FC<BoatDetailsProps> = ({ boats }) => {
  const [selectedLogType, setSelectedLogType] = useState<LogType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const logsPerPage = 10;

  if (!boats.length) return <div>No boat data available.</div>;
  const boat = boats[0];

  // Function to render the log details for the selected log type
  const renderLogDetails = (logType: LogType) => {
    const logs = boat?.[logType];
    if (!logs || logs.length === 0) return <div>No logs available.</div>;

    // Displays the first 10 logs or fewer if there aren't enough
    const pageCount = Math.ceil(logs.length / logsPerPage);
    const displayLogs = logs.slice(
      currentPage * logsPerPage,
      (currentPage + 1) * logsPerPage,
    );

    // Before accessing displayLogs[0], ensures it's defined
    const firstLogEntry = displayLogs[0];

    if (!firstLogEntry) {
      return <div>No logs available.</div>;
    }
    // Determines the number of properties to display in headers
    const propertiesToShow = showMore
      ? Object.keys(firstLogEntry)
      : Object.keys(firstLogEntry).slice(0, 5);

    return (
      <div className="mb-4 min-h-screen w-full overflow-x-auto rounded border bg-white p-2 p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-gray-700 ">
              <th className="border-300 border px-4 py-2">ID</th>
              {/* Checks that displayLogs[0] is defined before accessing its keys */}
              {propertiesToShow.map((key) => (
                <th key={key} className="border-300 border px-4 py-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Table body rendering */}
            {displayLogs.map((log, index) => (
              <tr key={index} className="border-b text-center text-gray-700">
                <td className="border-300 border px-4 py-2">
                  {currentPage * logsPerPage + index + 1}
                </td>
                {Object.entries(log)
                  .slice(0, showMore ? undefined : 5) // Show all if showMore is true; otherwise shows first 5
                  .map(([key, value], valueIndex) => (
                    <td
                      key={valueIndex}
                      className="border-300 border px-4 py-2"
                    >
                      {typeof value === "string"
                        ? value
                        : JSON.stringify(value)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-between text-gray-700">
          <button
            className="rounded bg-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-300"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {pageCount}
          </span>
          <button
            className="rounded bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= pageCount - 1}
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col overflow-x-auto p-4">
      <h1 className="mb-4 text-center text-2xl font-medium uppercase text-gray-700">
        Boat Details
      </h1>
      {/* Container for buttons and title */}
      <div className="mb-4 flex items-center justify-between">
        {/* Centered log type buttons */}
        <div className="flex flex-grow justify-center space-x-4">
          {(
            [
              "bmsLogs",
              "chargerLogs",
              "coreMCULogs",
              "motorLogs",
              "throttleLogs",
            ] as LogType[]
          ).map((logType: LogType) => (
            <button
              key={logType}
              onClick={() => {
                setSelectedLogType(logType);
                setCurrentPage(0); // Resets to the first page whenever log type changes
              }}
              className={`rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300 ${
                selectedLogType === logType ? "bg-gray-300" : ""
              }`}
            >
              {logType.charAt(0).toUpperCase() + logType.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      {/* Details rendering */}
      <div className="mx-auto w-full flex-wrap justify-center">
        {selectedLogType && renderLogDetails(selectedLogType)}
      </div>
    </div>
  );
};

export default BoatTable;
