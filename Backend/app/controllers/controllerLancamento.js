const { lancamento } = require("../database/db");
const { cliente } = require("../database/db");
const guiaValidators = require("../validators/validacao");

module.exports = {
  async lancamentoCliente(req, res) {
    try {
      const lancamentoCliente = await cliente.findByPk(req.params.id, {
        include: {
          association: "Saldos",
          attributes: ["id", "valor", "data", "descripcao"],
        },
      });
      if (lancamentoCliente) {
        res.json({
          status: 200,
          data: lancamentoCliente,
        });
      } else {
        res.status(400).send(400);
      }
      } catch (error) {
       res.status(400).send(400);
    }
  },
  async criandoLancamento(req, res) {
    const { valor, descripcao, tipo } = req.body;
    let validation = new guiaValidators();
    validation.hasMinLen(req.body.valor, 2, "valor não pode ser vacio");
    validation.hasMaxLen(
      req.body.valor,
      12,
      "valor não pode ser maior 12 caracteres"
    );
    validation.hasMinLen(req.body.data, 10, "data invalida");
    validation.hasMaxLen(
      req.body.data,
      10,
      "data não pode ser maior 10 caracteres"
    );
    validation.hasMinLen(
      req.body.descripcao,
      2,
      "descripção não pode ser vacio"
    );
    validation.hasMaxLen(
      req.body.descripcao,
      50,
      "descripção não pode ser maior 12 caracteres"
    );
    validation.hasMinLen(
      req.body.tipo,
      2,
      "tipo de lançamento não pode ser vacio"
    );
    validation.hasMaxLen(
      req.body.tipo,
      50,
      "tipo de lançamento não pode ser maior 12 caracteres"
    );
    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }

    try {
      if (
        req.body.valor &&
        req.body.data &&
        req.body.descripcao &&
        req.body.tipo &&
        req.body.id_cliente
      ) {
        const lancamentoCliente = await lancamento.create({
          valor: req.body.valor,
          data: req.body.data,
          descripcao: req.body.descripcao,
          tipo: req.body.tipo,
          id_cliente: req.body.id_cliente,
        });
        res.status(201).json({
          status: 201,
          statusText: "Created",
        });
      } else {
        res.status(400).send(400);
      }
    } catch (error) {
      res.status(400).send(400);
    }
  },

  async atualizacaoLancamento(req, res) {
    const { valor, descripcao, tipo } = req.body;
    let validation = new guiaValidators();
    validation.hasMinLen(req.body.valor, 2, "valor não pode ser vacio");
    validation.hasMaxLen(
      req.body.valor,
      12,
      "valor não pode ser maior 12 caracteres"
    );
    validation.hasMinLen(req.body.data, 10, "data invalida");
    validation.hasMaxLen(
      req.body.data,
      10,
      "data não pode ser maior 10 caracteres"
    );
    validation.hasMinLen(
      req.body.descripcao,
      2,
      "descripção não pode ser vacio"
    );
    validation.hasMaxLen(
      req.body.descripcao,
      50,
      "descripção não pode ser maior 12 caracteres"
    );
    validation.hasMinLen(
      req.body.tipo,
      2,
      "tipo de lançamento não pode ser vacio"
    );
    validation.hasMaxLen(
      req.body.tipo,
      50,
      "tipo de lançamento não pode ser maior 12 caracteres"
    );
    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }
    try {
      const atualizacaoLancamento = await lancamento.findByPk(req.params.id);
      if (
        (atualizacaoLancamento && req.body.valor,
        req.body.data,
        req.body.descripcao,
        req.body.tipo)
      ) {
        await atualizacaoLancamento.update(req.body);
        return res.json({
          status: 201,
          statusText: "Created",
          message: "Atualizado com sucesso",
        });
      } else {
        res.status(400).send(400);
      }
    } catch (error) {
      res.status(400).send(400);
    }
  },
  async deletandoLancamento(req, res) {
    try {
      const deletandoLancamento = await lancamento.findByPk(req.params.id);
      if (deletandoLancamento) {
        await deletandoLancamento.destroy();
        return res.json({
          status: 200,
          statusText: "Ok",
        });
      } else {
        res.status(400).send(400);
      }
    } catch (error) {
      res.status(400).send(400);
    }
  },
};
