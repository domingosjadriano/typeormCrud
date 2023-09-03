import { TesteController } from "./controller/TesteController"
import *as express from 'express'
export const router =express.Router()

router.get('/teste',new TesteController().all)

router.post('/teste',new TesteController().save)
router.delete('/teste/:id',new TesteController().remove)
router.put('/teste',new TesteController().update)

router.get('/teste/:id',new TesteController().one)

