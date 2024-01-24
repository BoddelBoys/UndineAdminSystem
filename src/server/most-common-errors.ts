import { dotnetFetch } from "~/utils/fetch";

export const getMostCommonErrorData = async () => {
  const fetchedData = await dotnetFetch(
    "https://localhost:7054/ErrorCodes/MostCommon?last24Hours=true",
    {},
  );
  const data = await fetchedData.json();
  return data;
};
