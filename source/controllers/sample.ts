import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Server is Running Perfectly...'
    });
};
const sayHello = (req: Request, res: Response, next: NextFunction)=>{
    logging.info('serverside','Hello from the hell');
    return res.status(200).json({
        message: `Hello from Bilal's side`
    })
}
export default { serverHealthCheck,sayHello };
