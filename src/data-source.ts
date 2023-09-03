import "reflect-metadata"
import { DataSource } from "typeorm"
import { Teste } from "./entity/Teste"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "teste",
    synchronize: true,
    logging: false,
    entities: [Teste],
    migrations: [],
    subscribers: [],
})
