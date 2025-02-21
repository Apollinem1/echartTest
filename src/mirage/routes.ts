import { Server } from "miragejs";
import { generateNormalDistributionData } from "../utils/dataGenerators";

export function routes(this: Server) {
  this.namespace = "api";

  this.get("/milk-stats", () => {
    const data = generateNormalDistributionData(12, 200, 30);
    return { data };
  });

  this.get("/cheese-stats", () => {
    const data = generateNormalDistributionData(12, 80, 15);
    return { data };
  });

  this.get("/yogurt-stats", () => {
    const data = generateNormalDistributionData(12, 50, 10);
    return { data };
  });
}
