import { getBoatSystemsData } from "~/server/boatsystems";
import BoatSystems from "../_components/boatsystems";

export default async function Home() {
  const data = await getBoatSystemsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <BoatSystems data={data}></BoatSystems>
    </main>
  );
}
