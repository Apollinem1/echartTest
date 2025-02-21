import CheeseChartContainer from "../components/containers/CheeseChartContainer";
import MilkChartContainer from "../components/containers/MilkChartContainer";
import YogurtChartContainer from "../components/containers/YogurtChartContainer";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen ">
      <h1 className="text-2xl font-bold mb-6">
        Доска показателей (молочная продукция)
      </h1>
      <MilkChartContainer />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <CheeseChartContainer />
        <YogurtChartContainer />
      </div>
    </div>
  );
};

export default DashboardPage;
