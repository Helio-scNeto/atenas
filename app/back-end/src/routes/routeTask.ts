import { Router } from 'express';
import EmailEntity from '../entities/emailEntity';

const routeUser = Router();

routeUser.get('/', EmailEntity().getAllEmails);
routeUser.post('/', EmailEntity().sendEmail);

export default routeUser;