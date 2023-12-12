import { dotnetFetch } from "~/utils/fetch";
export const getScatterplotData = async () => {
  const fetchedData = await dotnetFetch(
    "https://localhost:7054/api/ScatterData",
    {
      cache: "no-cache",
    },
  );
  const data = await fetchedData.json();
  return data;
};
