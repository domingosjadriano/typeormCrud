import { myDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Teste } from "../entity/Teste"
const  testeRepository = myDataSource.getRepository(Teste)


export class TesteController {

    async all(request: Request, response: Response, next: NextFunction) {
        return response.json(await testeRepository.find())
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await testeRepository.findOne({
            where: { id }
        })

        if (!user) {
            return response.json("unregistered user")
        }
        return response.json(user)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName } = request.body;

        return response.json(await testeRepository.insert({
            firstName,
            lastName,
        }))
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName } = request.body;
        const id =request.params.id

        return response.json(await testeRepository.update(id,{
            firstName,
            lastName
        }))
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await testeRepository.findOneBy({ id })

        if (!userToRemove) {
            return response.status(400).json("this teste not exist")
        }

        await testeRepository.remove(userToRemove)

        return response.json("user has been removed")
    }


}