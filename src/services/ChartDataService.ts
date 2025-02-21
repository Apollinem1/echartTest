import axios from "axios";
import { generateNormalDistributionData } from "../utils/dataGenerators";
const useMockedData = false;

export class ChartDataService {
  async getMilkStats(): Promise<number[]> {
    if (useMockedData) {
      // Блок генерации
      return generateNormalDistributionData(12, 200, 30);
    } else {
      // Вызов реального API
      const res = await axios.get("/api/milk-stats"); //опять же в дев режиме подключение к моковому апи
      return res.data.data;
    }
  }

  async getCheeseStats(): Promise<number[]> {
    if (useMockedData) {
      return generateNormalDistributionData(12, 80, 15);
    } else {
      const res = await axios.get("/api/cheese-stats");
      return res.data.data;
    }
  }

  async getYogurtStats(): Promise<number[]> {
    if (useMockedData) {
      return generateNormalDistributionData(12, 50, 10);
    } else {
      const res = await axios.get("/api/yogurt-stats");
      return res.data.data;
    }
  }
}

export const chartDataService = new ChartDataService();
