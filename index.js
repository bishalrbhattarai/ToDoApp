import express from "express";
import dotenv from "dotenv";
import connection from "./db/connection.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
dotenv.config();

import routes from "./routes/routes.js";
app.use(routes);

app.use((err, req, res, next) => {
  res.json(err);
});

app.listen(process.env.PORT, async () => {
  console.log(`Server Started at ${process.env.PORT}`);
  await connection();
});
