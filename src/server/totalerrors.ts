import { dotnetFetch } from "~/utils/fetch";

export const getTotalErrorsData = async () => {
  const fetchedData = await dotnetFetch(
    "https://localhost:7054/ErrorCodes/count?last24Hours=true",
    {},
  );
  const data = await fetchedData.json();
  return data;
};
