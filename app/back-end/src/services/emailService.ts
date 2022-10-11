import IEmail, { IEmailRepository } from "../interfaces/IEmail";
import ValidMessage from "./validators/validMessage";
import ValidDescription from "./validators/validEmail";
import ValidName from "./validators/validName";

export default class EmailService {
  constructor(private repository: IEmailRepository) {
    this.repository = repository;
  }

  async getAllEmails(): Promise<IEmail[]> {
    const emails = await this.repository.getAllEmails();
    return emails;
  }

  async sendEmail(body: IEmail): Promise<IEmail> {
    const { name, email, message } = body;

    new ValidName(name).valid();
    new ValidDescription(email).valid();
    new ValidMessage(message).valid();

    const emailResponse = await this.repository.sendEmail(body);
    return emailResponse;
  }
}
