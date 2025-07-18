// import { Request, Response } from 'express';
// import { identifyUser } from '../services/identify.service'

// export const identifyController = async (req: Request, res: Response) => {
//   const { email, phoneNumber } = req.body;
//   try {
//     const result = await identifyUser({ email, phoneNumber });
//     res.status(200).json({ contact: result });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
