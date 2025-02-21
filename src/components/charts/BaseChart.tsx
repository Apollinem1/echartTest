import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

interface BaseChartProps {
  option: EChartsOption;
  className?: string;
  style?: React.CSSProperties;
}

const BaseChart: React.FC<BaseChartProps> = ({ option, className, style }) => {
  return (
    <div className={className} style={style}>
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default BaseChart;
