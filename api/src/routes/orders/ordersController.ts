import { Request, Response } from "express";
export async function createOrder(req: Request, res: Response) {
    try {
        console.log(req.cleanBody);
        const [order] = await db.insert
    } catch (e) {
        res.status(400).json({ message: 'Invalid order data' })
    }
}