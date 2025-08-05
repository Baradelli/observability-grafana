import cors from "cors";
import express from "express";
import { createServer } from "http";
import { metrics } from "./tracer";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  const metric = metrics.getMeter("app-rocketseat");
  const successMetric = metric.createCounter("hello-success");
  successMetric.add(1);

  res.send("Hello, World!");
});

app.get("/metric-test", (req, res) => {
  const metric = metrics.getMeter("app-rocketseat");
  // ! COUNTER criar _total
  const errorMetric = metric.createCounter("hello-error");
  errorMetric.add(1);

  // ! HISTOGRAM criar _bucket _count _sum
  const histogram = metric.createHistogram("request-duration");
  histogram.record(1000);

  return res.status(200).json({ message: "Metric added!" });
});

export default server;
