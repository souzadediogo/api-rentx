import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new Error("Token Missing!")
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, "3802790c2154562935acf86fea442969") as IPayload;
        
        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id)
        
        if(!user) {
            throw new Error("User doest not exist!")
        }

        next();
    } catch {
        throw new Error("Invalid token!")
    }
}