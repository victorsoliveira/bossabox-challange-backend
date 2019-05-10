import { Router } from 'express'
import ToolController from './controllers/ToolController'

const routes = Router()

/**
 * @swagger
 * definitions:
 *   Tool:
 *     properties:
 *       title:
 *         type: string
 *       link:
 *         type: string
 *       description:
 *         type: string
 *       tags:
 *         type: array
 */

/**
 * @swagger
 * /tools:
 *   get:
 *     tags:
 *       - Tools
 *     description: Returns all tools
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tools
 *         schema:
 *           $ref: '#/definitions/Tool'
 */
routes.get('/tools', ToolController.list)

/**
 * @swagger
 * /tools:
 *   post:
 *     tags:
 *       - Tools
 *     description: Create a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tool
 *         description: Tool object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Tool'
 *     responses:
 *       200:
 *         description: Tool created
 *         schema:
 *           $ref: '#/definitions/Tool'
 */
routes.post('/tools', ToolController.create)

export default routes
