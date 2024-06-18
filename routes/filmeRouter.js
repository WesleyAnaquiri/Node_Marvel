// No arquivo routes/filmeRouter.js

const { Router } = require("express");
const router = Router();
const filmesController = require('../controllers/filmeController');

// Definição das rotas com get, post, put, delete
router.get("/filme", filmesController.listarfilme);

router.post("/filme", filmesController.criarfilme); 

router.put("/filme/:id", filmesController.atualizarfilme);

router.delete("/filme/:id", filmesController.apagarfilme);

module.exports = router;
