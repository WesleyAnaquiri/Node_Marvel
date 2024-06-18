const express = require("express");
const router = require("./routes/FilmeRouter"); 

const app = express();
const port = 3000;


app.use(express.json());

app.use(router); 

app.listen(port, (error) => {
    if (error) {
        console.log("VOCÊ FALHOU MISERAVELMENTE!! VOCÊ ESTÁ COM UM ERRO! ENCONTRE E TENTE NOVAMENTE!");
        return;
    }
        console.log(`VOCÊ CONSEGUIU, BRABO DEMAIS! SEU SERVIDOR ESTÁ RODADANDO NA PORTA ${port}`);
});
