import { prisma } from "../lib/prisma";
import { ICreateMessageRequest } from "../types/MessagesRepositoryTypes";

export class MessagesRepository {
  async create({ email, message, name }: ICreateMessageRequest) {
    const createdMessage = await prisma.messages.create({
      data: {
        email,
        message,
        name,
        created_at: new Date().toString(),
      },
    });
    return createdMessage;
  }
}
