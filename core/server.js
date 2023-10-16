import proxy from "express-http-proxy";
import express from "express";

const app = express();
const app_1 = proxy("http://localhost:3201")
const app_2 = proxy("http://localhost:3202")
const app_3  = proxy("http://localhost:3203")

app.use("/app-1",app_1)
app.use("/app-2",app_2)
app.use("/app-3",app_3)

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
