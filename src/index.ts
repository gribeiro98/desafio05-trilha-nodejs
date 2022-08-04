import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
