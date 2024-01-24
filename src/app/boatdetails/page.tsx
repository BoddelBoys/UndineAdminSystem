import BoatTable from "../_components/BoatDetails";

import { getBoatDetailsData } from "~/server/boat-details";

export default async function Home() {
  const data = await getBoatDetailsData();
  return (
    <main className=" mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center">
      <BoatTable boats={data} />
    </main>
  );
}
