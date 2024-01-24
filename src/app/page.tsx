import BarChart from "./_components/BarChart";
import Card from "./_components/Card";
import type { MostCommonFaultCode } from "~/types/most-common-fault-code";
import { getBarchartData } from "~/server/bar-chart";
import type { KwhUsage } from "~/types/kwh-usage";
import { getMostCommonErrorData } from "~/server/most-common-errors";
import { getTotalErrorsData } from "~/server/total-errors";

export default async function Home() {
  const title = "KwH Usage";

  const totalErrors = await getTotalErrorsData();
  const mostCommon = (await getMostCommonErrorData()) as MostCommonFaultCode;
  const barchartData = (await getBarchartData()) as KwhUsage;

  return (
    <main className="flex min-h-screen items-center justify-center space-x-10 bg-slate-100">
      <div>
        <Card title={title}>
          <BarChart data={barchartData}></BarChart>
        </Card>
      </div>
      <div className="space-y-5">
        <Card title="Most common error code">
          <div className="font-mediumbold">
            <div className="flex space-x-4">
              <h2 className="py-1 text-lg">Error code:</h2>
              <h3 className="rounded border-2 border-slate-200 px-2 text-2xl font-semibold">
                {mostCommon.faultCodeId}
              </h3>
            </div>
            <div className="flex space-x-4">
              <h2 className="py-1 text-lg">Amount of:</h2>
              <h3 className="rounded border-2 border-slate-200 px-2 text-2xl font-semibold">
                {mostCommon.count}
              </h3>
            </div>
          </div>
        </Card>
        <Card title="Total errors">
          <div className="justify-center text-center text-4xl font-semibold">
            {27}
          </div>
        </Card>
      </div>
    </main>
  );
}
