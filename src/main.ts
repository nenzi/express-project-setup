require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes/main";
import logger from "./middleware/logger";
import db from "./database";

const app = express();

const PORT = process.env.PORT || 1234;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  logger(req.url);
  next();
});

app.use()

// routes
app.use("/", routes);

app.listen(PORT, async () => {
  await db.sync({ alter: true });

  console.log(`listening on PORT http://localhost:${PORT}`);
});

export { db };
