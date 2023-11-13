import express from 'express'
import { Controller } from './../controllers/usersController.js'


const router = express.Router()
const controllers = new Controller()

router.get('/', controllers.getController)
router.post('/', controllers.postController)

export default router