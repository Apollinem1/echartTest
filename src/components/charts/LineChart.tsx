import { EChartsOption } from "echarts-for-react";
import React, { memo } from "react";
import BaseChart from "./BaseChart";

interface LineChartProps {
  data: number[];
  title?: string;
  heightClass?: string;
  yLabel?: string;
}

const LineChart: React.FC<LineChartProps> = memo(
  ({ data, title, heightClass, yLabel }) => {
    const yAxisName = yLabel !== undefined ? yLabel : "";

    const option: EChartsOption = {
      title: {
        text: title ?? "Линейный график",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: data.map((_, i) => `День ${i + 1}`),
      },
      yAxis: {
        type: "value",
        name: yAxisName,
      },
      series: [
        {
          data,
          type: "line",
          smooth: true,
        },
      ],
    };

    return (
      <BaseChart
        option={option}
        className={`w-full ${heightClass ?? "h-64"} bg-white shadow rounded`}
      />
    );
  }
);

export default LineChart;
