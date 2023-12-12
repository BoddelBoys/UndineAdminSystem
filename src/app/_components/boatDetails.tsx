import React, { useState } from "react";
import type { BoatData } from "~/types/mockBoats";

interface BoatDetailsProps {
  boats: BoatData[];
}

// Define the type for the log names
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

    // Display the first 10 logs or fewer if there aren't enough
    const pageCount = Math.ceil(logs.length / logsPerPage);
    const displayLogs = logs.slice(
      currentPage * logsPerPage,
      (currentPage + 1) * logsPerPage
    );

      // Before accessing displayLogs[0], ensure it's define
      const firstLogEntry = displayLogs[0];

      if (!firstLogEntry) {
        return <div>No logs available.</div>;
      }
      // Determine the number of properties to display in headers
      const propertiesToShow = showMore ? Object.keys(firstLogEntry) : Object.keys(firstLogEntry).slice(0, 5);

    return (
      <div className="overflow-x-auto p-4 bg-white mb-4 w-full rounded border p-2 shadow">
        <h3 className="rounded-t bg-gray-100 px-4 py-2 text-center text-lg font-medium text-gray-700 border border-300">
          {logType.charAt(0).toUpperCase() + logType.slice(1)}
        </h3>
        <table className="table-auto w-full">
          <thead>
            <tr className="text-gray-700 ">
              <th className="px-4 py-2 border border-300">ID</th>
              {/* Check that displayLogs[0] is defined before accessing its keys */}
              {propertiesToShow.map((key) => (
              <th key={key} className="px-4 py-2 border border-300">
                {key}
              </th>
            ))}
            </tr>
          </thead>
          <tbody>
            {/* Table body rendering */}
            {displayLogs.map((log, index) => (
              <tr key={index} className="text-gray-700 border-b text-center">
                <td className="px-4 py-2 border border-300">{currentPage * logsPerPage + index + 1}</td>
                {Object.entries(log)
                  .slice(0, showMore ? undefined : 5) // Show all if showMore is true; otherwise show first 5
                  .map(([key, value], valueIndex) => (
                    <td key={valueIndex} className="px-4 py-2 border border-300">
                      {typeof value === 'string' ? value : JSON.stringify(value)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-between mt-4 text-gray-700">
        <button
        onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Previous</button>
        <span>Page {currentPage + 1} of {pageCount}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= pageCount - 1}> Next
        </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full place-items-center overflow-x-auto p-4">
      <h1 className="mb-4 text-center text-2xl font-medium uppercase text-gray-700">
        Boat Details
      </h1>
      <div className="mb-4 flex justify-center space-x-4">
      {(["bmsLogs", "chargerLogs", "coreMCULogs", "motorLogs", "throttleLogs"] as LogType[]).map((logType: LogType) => (
  <button
    key={logType}
    onClick={() => {
      setSelectedLogType(logType);
      setCurrentPage(0); // Reset to the first page whenever log type changes
    }}
    className={`rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300 ${
      selectedLogType === logType ? "bg-gray-300" : ""
    }`}
  >
    {logType.charAt(0).toUpperCase() + logType.slice(1)}
  </button>
))}
    <button className="rounded bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300" 
        onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}
        </button>
  </div>
      <div className="mx-auto flex w-[80%] flex-wrap justify-center">
        {/* Render the details for the selected log type */}
        {selectedLogType && renderLogDetails(selectedLogType)}
      </div>
    </div>
  );
};

export default BoatTable;
