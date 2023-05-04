const express = require('express');
const routes = express.Router();



const Usuario = require('./controller.js');

routes.post("/create", Usuario.create);

routes.post("/login", Usuario.login);

routes.get("/readOne/:id", Usuario.readOne);

routes.get("/readall", Usuario.readall);

routes.put("/update/:id", Usuario.update);

routes.delete("/remove/:id", Usuario.remove);



module.exports = routes;

