import axios from "axios";

export class ChartDataService {
  async getMilkStats(): Promise<number[]> {
    const res = await axios.get("/api/milk-stats");
    return res.data.data;
  }

  async getCheeseStats(): Promise<number[]> {
    const res = await axios.get("/api/cheese-stats");
    return res.data.data;
  }

  async getYogurtStats(): Promise<number[]> {
    const res = await axios.get("/api/yogurt-stats");
    return res.data.data;
  }
}

export const chartDataService = new ChartDataService();
