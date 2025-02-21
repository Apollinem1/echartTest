import { createServer } from "miragejs";
import { routes } from "./routes";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    routes,
  });
}
