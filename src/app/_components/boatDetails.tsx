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

  if (!boats.length) return <div>No boat data available.</div>;
  const boat = boats[0];

  // Function to render the log details for the selected log type
  const renderLogDetails = (logType: LogType) => {
    const logs = boat[logType];
    if (!logs || logs.length === 0) return <div>No logs available.</div>;

    // Display the first 10 logs or fewer if there aren't enough
    const displayLogs = logs.slice(0, 10);

    return (
      <div className="mb-4 w-full rounded border p-2 shadow">
        <h3 className="rounded-t bg-gray-100 px-4 py-2 text-center text-lg font-medium text-gray-700">
          {logType.charAt(0).toUpperCase() + logType.slice(1)}
        </h3>
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">ID</th>
              {/* Assuming all log entries have the same structure, so we can use the first one to get the headers */}
              {Object.keys(displayLogs[0])
                .slice(0, 5)
                .map((key) => (
                  <th key={key} className="px-4 py-2">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {displayLogs.map((log, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                {Object.entries(log)
                  .slice(0, 5)
                  .map(([key, value], valueIndex) => (
                    <td key={valueIndex} className="px-4 py-2">
                      {value.toString()}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="w-full place-items-center overflow-x-auto p-4">
      <h1 className="mb-4 text-center text-2xl font-medium uppercase">
        Boat Details
      </h1>
      <div className="mb-4 flex justify-center space-x-4">
        {/* Buttons for selecting the log type */}
        {[
          "bmsLogs",
          "chargerLogs",
          "coreMCULogs",
          "motorLogs",
          "throttleLogs",
        ].map((logType) => (
          <button
            key={logType}
            onClick={() => setSelectedLogType(logType)}
            className={`rounded bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 ${
              selectedLogType === logType ? "bg-gray-300" : ""
            }`}
          >
            {logType.charAt(0).toUpperCase() + logType.slice(1)}
          </button>
        ))}
      </div>
      <div className="mx-auto flex w-[80%] flex-wrap justify-center">
        {/* Render the details for the selected log type */}
        {selectedLogType && renderLogDetails(selectedLogType)}
      </div>
    </div>
  );
};

export default BoatTable;
