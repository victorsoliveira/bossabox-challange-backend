import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import routes from './routes'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.swagger()
  }

  private middlewares () : void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/vuttr', {
      user: 'admin',
      pass: 'admin',
      useNewUrlParser: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }

  private swagger (): void {
    const swaggerDefinition = {
      info: {
        title: 'VUTTR Swagger API',
        version: '1.0.0',
        description: 'VUTTR RESTful API description'
      },
      host: 'localhost:3000',
      basePath: '/'
    }

    const options = {
      swaggerDefinition: swaggerDefinition,
      apis: ['./src/routes.ts']
    }

    const swaggerSpec = swaggerJSDoc(options)
    this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  }
}

export default new App().express
