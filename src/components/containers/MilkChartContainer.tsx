import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { chartDataService } from "../../services/ChartDataService";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";
import ToggleChartType from "../shared/ToggleChartType";

export type ChartType = "line" | "bar" | "pie";

const MilkChartContainer: React.FC = memo(() => {
  const [milkStats, setMilkStats] = useState<number[]>([]);
  const [milkChartType, setMilkChartType] = useState<ChartType>("line");

  const loadMilkStats = useCallback(async () => {
    const milk = await chartDataService.getMilkStats();
    setMilkStats(milk);
  }, []);

  useEffect(() => {
    loadMilkStats();
    const intervalId = setInterval(loadMilkStats, 2000);
    return () => clearInterval(intervalId);
  }, [loadMilkStats]);

  const milkChart = useMemo(() => {
    switch (milkChartType) {
      case "bar":
        return (
          <BarChart
            data={milkStats}
            title="Производство молока в литрах"
            heightClass="h-96"
            yLabel=""
          />
        );
      case "pie":
        return (
          <PieChart
            data={milkStats}
            title="Производство молока в литрах"
            heightClass="h-96"
          />
        );
      default:
        return (
          <LineChart
            data={milkStats}
            title="Производство молока в литрах"
            heightClass="h-96"
          />
        );
    }
  }, [milkStats, milkChartType]);

  return (
    <div className="bg-white p-4 rounded shadow max-w-3xl mb-8">
      <ToggleChartType
        chartType={milkChartType}
        onChartTypeChange={setMilkChartType}
      />
      {milkChart}
    </div>
  );
});

export default MilkChartContainer;
