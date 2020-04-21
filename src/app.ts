import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

class App {
  public express: express.Application;

  constructor() {

    this.express = express();

    this.express.use(express.json());
    this.express.use(cors({ origin: true }));

    this.swagger();
  }

  private swagger(): void {

    const swaggerDefinition = {
      info: {
        title: 'VUTTR Swagger API',
        version: '1.0.0',
        description: 'VUTTR RESTful API description'
      },
      host: 'localhost:3000',
      basePath: '/',
    }

    const options = {
      swaggerDefinition: swaggerDefinition,
      apis: ['./swagger.ts']
    }

    const swaggerSpec = swaggerJSDoc(options)
    this.express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  }
}

export default new App().express;