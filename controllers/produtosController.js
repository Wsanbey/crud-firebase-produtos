const { produtosCollection } = require('../services/firebase');
const { Timestamp } = require('firebase-admin/firestore');

exports.getAll = async (req, res, next) => {
  try {
    const snapshot = await produtosCollection.get();
    const produtos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(produtos);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const doc = await produtosCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { nome, preco, categoria } = req.body;
    if (!nome || preco === undefined || !categoria) return res.status(400).json({ erro: 'Nome e preço são obrigatórios' });

    const novoProduto = {
      nome,
      preco,
      categoria,
      criadoEm: Timestamp.now(),
      atualizadoEm: Timestamp.now(),
    };

    const docRef = await produtosCollection.add(novoProduto);
    res.status(201).json({ id: docRef.id, ...novoProduto });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { nome, preco, categoria } = req.body;

    const docRef = produtosCollection.doc(req.params.id);
    const doc = await docRef.get();

    if (!doc.exists) return res.status(404).json({ erro: 'Produto não encontrado' });

    const atualizado = {
      ...(nome && { nome }),
      ...(preco !== undefined && { preco }),
      ...(categoria && { categoria }),
      atualizadoEm: Timestamp.now(),
    };

    await docRef.update(atualizado);
    res.json({ id: req.params.id, ...atualizado });
  } catch (err) {
    next(err);
  }
};


exports.delete = async (req, res, next) => {
  try {
    const docRef = produtosCollection.doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).json({ erro: 'Produto não encontrado' });

    await docRef.delete();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
