import React from "react";
import { ChartType } from "../containers/MilkChartContainer";

interface ToggleChartTypeProps {
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

const ToggleChartType: React.FC<ToggleChartTypeProps> = ({
  chartType,
  onChartTypeChange,
}) => {
  const baseStyle = "px-3 py-1 rounded transition-colors ";

  const chartOptions: { type: ChartType; label: string }[] = [
    { type: "line", label: "Линейный график" },
    { type: "bar", label: "Столбцовая диаграмма" },
    { type: "pie", label: "Круговая диаграмма" },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {chartOptions.map((option) => {
        const isActive = chartType === option.type;
        return (
          <button
            key={option.type}
            onClick={() => onChartTypeChange(option.type)}
            className={
              baseStyle + (isActive ? "bg-blue-500 text-white" : "bg-gray-200")
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleChartType;
