import { dotnetFetch } from "~/utils/fetch";
export const getBoatSystemsData = async () => {
  const fetchedData = await dotnetFetch(
    "https://localhost:7054/api/BoatSystems",
    {},
  );
  const data = await fetchedData.json();
  return data;
};
