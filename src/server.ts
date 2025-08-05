import sdk from "./tracer";
sdk.start();

import app from "./app";
import { log } from "./infra/logger";

app.listen(3001, () => {
  log.info("Server is running on http://localhost:3001");
});
