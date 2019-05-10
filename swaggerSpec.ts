import swaggerJSDoc from 'swagger-jsdoc'

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger'
  },
  host: 'localhost:3000',
  basePath: '/'
}

// options for the swagger docs
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./src/routes.ts']
}

class SwaggerSpec {
  private swaggerJsDoc : any;

  public constructor () {
    this.swaggerJsDoc = swaggerJSDoc(options)
  }

  public spec (): any {
    return this.swaggerJsDoc
  }
}

export default new SwaggerSpec()
