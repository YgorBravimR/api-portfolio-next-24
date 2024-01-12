import { FastifyReply, FastifyRequest } from "fastify";
import { MessagesRepository } from "../repositories/messagesRepository";
import { RegisterUseCase } from "../use-cases/register";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });

  const { name, email, message } = registerBodySchema.parse(request.body);

  try {
    const messagesRepository = new MessagesRepository();
    const registerUseCase = new RegisterUseCase(messagesRepository);

    const createdMessage = await registerUseCase.createMessage({
      name,
      email,
      message,
    });

    return reply.status(201).send(createdMessage);
  } catch (err) {
    throw err;
  }
}
