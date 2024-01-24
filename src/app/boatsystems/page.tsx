import { getBoatSystemsData } from "~/server/boat-systems";
import BoatSystems from "../_components/BoatSystems";

export default async function Home() {
  const data = await getBoatSystemsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <BoatSystems data={data}></BoatSystems>
    </main>
  );
}
