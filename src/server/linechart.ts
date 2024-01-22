import type { BoatStatus } from "~/types/boat-status";
import { dotnetFetch } from "~/utils/fetch";
export const getLinechartData = async () => {
  const fetchedData = await dotnetFetch("https://localhost:7054/1/status", {
    cache: "no-cache",
  });
  const data = (await fetchedData.json()) as BoatStatus;
  return data;
};
