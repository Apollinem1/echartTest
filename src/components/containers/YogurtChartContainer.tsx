import React, { useEffect, useState, useCallback, memo } from "react";
import { chartDataService } from "../../services/ChartDataService";
import BarChart from "../charts/BarChart";

const YogurtChartContainer: React.FC = memo(() => {
  const [yogurtStats, setYogurtStats] = useState<number[]>([]);

  const loadYogurtStats = useCallback(async () => {
    const yogurt = await chartDataService.getYogurtStats();
    setYogurtStats(yogurt);
  }, []);

  useEffect(() => {
    loadYogurtStats();
    const intervalId = setInterval(loadYogurtStats, 2000);
    return () => clearInterval(intervalId);
  }, [loadYogurtStats]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <BarChart
        data={yogurtStats}
        title="Производство йогурта в литрах"
        heightClass="h-64"
      />
    </div>
  );
});

export default YogurtChartContainer;
