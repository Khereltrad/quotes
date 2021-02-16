const { Router } = require('express');
const rt = Router();
const { Cita } = require('../db');


rt.get("/", async (req, res) => {
  const quotes = await Cita.findAll();
  res.render("index", { quotes: quotes });
});

rt.post('/quotes', async (req, res) => {
  const new_quote = await Cita.create({
    who: req.body.who,
    quote: req.body.quote
  });

  const quotes = await Cita.findAll();
  res.render('index.ejs', { quotes: quotes });
});

rt.get('/borrar/:id', async (req,res) =>{
  const quote = await Cita.findByPk(req.params.id);
  await quote.destroy();
  res.send('OK');
});

rt.get('/editar', async (req,res) =>{
  const quote = await Cita.findByPk(req.params.id);
  await quote.save();
  res.json({quote});
});

module.exports = rt;