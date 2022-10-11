import IEmail from "../interfaces/IEmail";
import Email from "../database/models/email";

export default class EmailRepository {
  constructor(private email = Email) {
    this.email = email;
  }
  async getAllEmails(): Promise<IEmail[]> {
    const email = await this.email.findAll();
    return email;
  }

  async sendEmail(body: IEmail): Promise<IEmail> {
    const { name, email, message } = body;
    const emailResponse = await this.email.create({
      name,
      email,
      message: message,
    });
    return emailResponse;
  }
}
