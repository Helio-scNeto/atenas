import { NextFunction, Request, Response } from "express";
import { IEmailService } from "../interfaces/IEmail";

export default class EmailContoller {
  constructor(private service: IEmailService) {
    this.service = service;
  }

  getAllEmails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const emails = await this.service.getAllEmails();
      return res.status(200).json(emails);
    } catch (error) {
      next(error);
    }
  };

  sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = await this.service.sendEmail(req.body);
      return res.status(201).json(email);
    } catch (error) {
      next(error);
    }
  };
}
