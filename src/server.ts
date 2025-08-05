import sdk from "./tracer";
sdk.start();

import app from "./app";

app.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
