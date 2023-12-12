import React from "react";
import { BoatData } from "~/types/mockBoats";

interface BoatDetailsProps {
  boats: BoatData[];
}

const BoatTable: React.FC<BoatDetailsProps> = ({ boats }) => {
  if (!boats.length) return <div>No boat data available.</div>;
  const boat = boats[0];
  
  // Make sure boat is defined before proceeding
  if (!boat) return <div>The boat is undefined.</div>;

  const renderLogDetails = (logArray?: any[], title?: string) => {
    if (!logArray || logArray.length === 0) return <div>No {title} available.</div>;
    return (
      <div className="mb-4 p-2 border rounded shadow">
        <h3 className="text-center bg-gray-100 text-gray-700 py-2 px-4 rounded-t font-medium text-lg">{title}</h3>
        <table className="min-w-full bg-gray">
          <tbody>
            {Object.entries(logArray[0])
              .filter(([key]) => key !== 'timestamp')
              .map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="px-2 py-1 font-medium border border">{key}</td>
                  <td className="px-2 py-1">{value as React.ReactNode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-2xl font-medium text-center uppercase mb-4">Boat Details</h1>
      <div className="mb-4">
        <div className="flex flex-wrap justify-center -mx-2">Boat ID: {boat.boatSystemId}</div>
        <div className="flex flex-wrap justify-center -mx-2">Boat Name: {boat.boatSystemName}</div>
        <div className="flex justify-center mt-8 space-x-4">
        {/* Add your buttons here */}
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
        BmsLogs
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
        ChargerLogs
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
        CoreMCULogs
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
        MotorLogs
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
        ThrottleLogs
        </button>
      </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-2">
        {renderLogDetails(boat.bmsLogs, 'BMS Logs')}
        {renderLogDetails(boat.chargerLogs, 'Charger Logs')}
        {renderLogDetails(boat.coreMCULogs, 'Core MCU Logs')}
        {renderLogDetails(boat.motorLogs, 'Motor Logs')}
        {renderLogDetails(boat.throttleLogs, 'Throttle Logs')}
      </div>
    </div>
  );
};

export default BoatTable;
