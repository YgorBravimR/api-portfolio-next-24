import cors from "@fastify/cors";
import fastify from "fastify";
import { ZodError } from "zod";
import { appRoutes } from "./routes";

const app = fastify();
const port = 3333;

app.register(appRoutes);
app.register(cors);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  console.error(error);

  return reply.status(500).send({ message: "Internal server error." });
});

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on port ${port}`);
  });
