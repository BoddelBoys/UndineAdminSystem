import { dotnetFetch } from "~/utils/fetch";
export const getBoatDetailsData = async () => {
  const fetchedData = await dotnetFetch("https://localhost:7054/1", {
    cache: "no-cache",
  });
  const data = await fetchedData.json();
  return data;
};
