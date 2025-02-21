import React, { useState, useEffect, useCallback, memo } from "react";
import { chartDataService } from "../../services/ChartDataService";
import LineChart from "../charts/LineChart";

const CheeseChartContainer: React.FC = memo(() => {
  const [cheeseStats, setCheeseStats] = useState<number[]>([]);
  const loadCheeseStats = useCallback(async () => {
    const cheese = await chartDataService.getCheeseStats();
    setCheeseStats(cheese);
  }, []);

  useEffect(() => {
    loadCheeseStats();
    const intervalId = setInterval(loadCheeseStats, 2000);
    return () => clearInterval(intervalId);
  }, [loadCheeseStats]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <LineChart
        data={cheeseStats}
        title="Производство сыра в килограммах"
        heightClass="h-64"
      />
    </div>
  );
});

export default CheeseChartContainer;
