import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { useContainer as routingUseContainer } from "routing-controllers";
import { createConnection } from "typeorm";
import { useContainer as ormUseContainer } from "typeorm";

import { Container } from "typedi";

import app from "./app";

routingUseContainer(Container);
ormUseContainer(Container);

//Creating connection...
createConnection().then(() => {

  useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.ts"],
    validation: false
  });

  // Run app
  app.listen(3000);

  console.log("VUTTR (Very Useful Tools to Remember) up at port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));


