import express from "express";
var path = require('path');
import db from "./models";
import indexRoutes from "./routes/routes";
import cors from "cors";
import helmet from "helmet";
import { generateSeeders } from "./tools/GenerateSeeders";

const app = express();
app.use(helmet());
const port = process.env.PORT;

//Routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(indexRoutes);

//Todo: Generate Seeders (Must be enabled when all tables have been created)
generateSeeders();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
