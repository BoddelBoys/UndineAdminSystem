import { dotnetFetch } from "~/utils/fetch";
export const getBoatDetailsData = async () => {
  const fetchedData = await dotnetFetch(
    "https://localhost:7054/api/MockBoat/boats",
    {
      cache: "no-cache",
    },
  );
  const data = await fetchedData.json();
  return data;
};
