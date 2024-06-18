// No arquivo controllers/filmeController.js

const Filme = require('../models/Filme');

exports.listarfilme = async (req, res) => {
  try {
    const filmes = await Filme.findAll();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar filmes", erro: error });
  }
};
exports.criarfilme = async (req, res) => {
  try {
    const filme = await Filme.create(req.body);
    res.status(201).json(filme);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar filme", erro: error });
  }
};

exports.atualizarfilme = async (req, res) => {
  try {
    const { id } = req.params;
    const [ updated ] = await Filme.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const filmeAtualizado = await Filme.findOne({ where: { id: id } });
      res.status(200).json(filmeAtualizado);
    } else {
      throw new Error('Filme não encontrado');
    }
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao atualizar filme", erro: error });
  }
};
exports.apagarfilme = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Filme.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(200).json({ mensagem: "Filme apagado com sucesso" });
    } else {
      throw new Error('Filme não encontrado');
    }
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao apagar filme", erro: error });
  }
};

