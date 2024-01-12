import { MessagesRepository } from "../repositories/messagesRepository";
import { ICreateMessageRequest } from "../types/MessagesRepositoryTypes";

export class RegisterUseCase {
  constructor(private messagesRepository: MessagesRepository) {}
  async createMessage({ name, email, message }: ICreateMessageRequest) {
    const createdMessage = await this.messagesRepository.create({
      name,
      email,
      message,
    });

    return createdMessage;
  }
}
