import type { Request, Response } from "express"
import User from "../models/User"
import { hashPassword } from "../utils/Auth"

export const createAccount = async(req: Request, res: Response) => {

    const { email, password } = req.body
    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('El Usuario ya esta registrado')
        return res.status(409).json({error : error.message})
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)

    await user.save()

    res.status(201).send('Usuario Creado Correctamente')
}