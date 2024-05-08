const express = require('express');
const cors = require ('cors');
const app = express();
const pool = require('./server');

require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicio de sesión:
app.use('/api/signup',require('./routes/users/signup'));
app.use('/api/login',require('./routes/users/login'));
//Rutas para Productos:
app.use('/api/createProduct',require('./routes/products/createProduct'));
app.use('/api/deleteProduct',require('./routes/products/deleteProduct'));
app.use('/api/getProduct',require('./routes/products/getProduct'));
//
app.use('/api/createorder',require('./routes/orders/createOrder'));
app.use('/api/refreshToken',require('./routes/refreshToken'));
app.use('/api/user',require('./routes/user'));
app.use('/api/todo',require('./routes/todo'));



app.get("/", (req,res) => {
    res.send("Hellow World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});