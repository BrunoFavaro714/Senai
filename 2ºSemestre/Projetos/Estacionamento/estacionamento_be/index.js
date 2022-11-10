const express = require('express');
const cors = require('cors');

const get = require('./src/routes/getRoutes.js');
const post = require('./src/routes/postRoutes.js');
const del = require('./src/routes/deleteRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(get);
app.use(post);
app.use(del);
app.listen(3000, () => {
    console.log('listening');
});