import EmailController from "../controllers/emailController";
import EmailRepository from "../repositories/emailRepository";
import EmailService from "../services/emailService";

const EmailEntity = () => {
  const repository = new EmailRepository();
  const service = new EmailService(repository);
  const controller = new EmailController(service);
  return controller;
};

export default EmailEntity;
