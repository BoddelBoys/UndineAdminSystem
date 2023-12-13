import { dotnetFetch } from "~/utils/fetch";

export const getBarchartData = async () => {
  const fetchedData = await dotnetFetch("https://localhost:7054/totalKwh", {});
  const data = await fetchedData.json();
  return data;
};
