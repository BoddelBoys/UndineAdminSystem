import { MockBoatSystemDTO } from "~/types/datatypes";

export default async function BoatSystems() {
  const data = MockBoatSystemDTO;

  return (
    <div className="overflow-x-auto">
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
          {data.map((entry) => (
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
}
