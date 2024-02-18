const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors");
const router = require("./router");
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.use(cors(

    // {
    //     origin: 'https://tourotank.com.br',
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     allowedHeaders: 'Content-Type,Authorization',
    // },
    // {
    //     origin: 'http://localhost:3000',
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     allowedHeaders: 'Content-Type,Authorization',
    // }
));
app.use(express.json());


app.use("/api", router);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});