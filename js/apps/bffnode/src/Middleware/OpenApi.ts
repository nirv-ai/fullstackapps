import type { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nirv.AI: BFF",
      version: "0.0.0",
    },
  },
  apis: ["../Routers/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export type AddOpenApiMiddlewareType = (app: Express) => void;
export const addOpenApiMiddleware: AddOpenApiMiddlewareType = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
