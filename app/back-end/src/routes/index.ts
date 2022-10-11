import { Router } from 'express';
import routeTask from './routeTask';


const route = Router();

route.use('/sendForm', routeTask);

export default route;