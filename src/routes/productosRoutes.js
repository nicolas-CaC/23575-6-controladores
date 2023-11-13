import express from 'express'
import controllers from './../controllers/productosController.js'


const router = express.Router()

router.get('/', controllers.getController)
router.post('/', controllers.postController)

export default router