import { getBoatSystemsData } from "~/server/boatsystems";
import BoatSystems from "../_components/boatsystems";

export default async function Home() {
  const data = await getBoatSystemsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <BoatSystems data={data}></BoatSystems>
    </main>
  );
}
