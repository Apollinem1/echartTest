import { EChartsOption } from "echarts-for-react";
import React, { memo } from "react";
import BaseChart from "./BaseChart";

interface PieChartProps {
  data: number[];
  title?: string;
  heightClass?: string;
}

const PieChart: React.FC<PieChartProps> = memo(
  ({ data, title, heightClass }) => {
    const pieData = data.map((val, i) => ({
      name: `День ${i + 1}`,
      value: val,
    }));

    const option: EChartsOption = {
      title: {
        text: title ?? "Круговая диаграмма",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        bottom: 0,
      },
      series: [
        {
          name: "Производство",
          type: "pie",
          radius: "60%",
          data: pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    return (
      <BaseChart
        option={option}
        className={`w-full ${heightClass ?? "h-96"} bg-white shadow rounded p-2`}
      />
    );
  }
);

export default PieChart;
