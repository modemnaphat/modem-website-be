import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`Server running at ${env.PORT}`);
});
