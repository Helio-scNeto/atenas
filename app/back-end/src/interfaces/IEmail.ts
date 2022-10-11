export default interface IEmail {
  id: number | string;
  name: string;
  email: string;
  message: string;
}

export interface IEmailService {
  getAllEmails(): Promise<IEmail[]>;
  sendEmail(email: IEmail): Promise<IEmail>;
}

export interface IEmailRepository {
  getAllEmails(): Promise<IEmail[]>;
  sendEmail(email: IEmail): Promise<IEmail>;
}
