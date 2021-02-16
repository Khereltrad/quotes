const { Router } = require('express');
const rt = Router();
const { Cita } = require('../db');


// para mostrar los paises
// rt.get('/', async (req, res) => {
//   const quotes = await Cita.findAll();
//   res.render('index.ejs', {quotes: quotes})
// });

rt.get("/", async (req, res) => {
  const quotes = await Cita.findAll();
  res.render("index",{quotes:quotes});
});  //* enrrutamiento de raiz 

rt.post('/quotes', async (req, res) => {
  console.log('Formulario : '+req.body.who, req.body.quote);
  const new_quote = await Cita.create({
    who: req.body.who,
    quote: req.body.quote
  });

  const quotes = await Cita.findAll();

  res.render('index.ejs', {quotes: quotes});
});


// rt.get('/quotes', async(req,res) => {
//     await new_quote.create({
//         who:    req.body.author,
//         quotes: req.body.cita
//     });
//     console.log('hay un nuevo posteo');
    
//     res.redirect('quotes.ejs');
// };

// rt.post("/quotes", async (req,res) => {
//     const new_cuote = await quote.create({
//         who:    req.body.author,
//         quotes:  req.body.cita
//     });
//     console.log('hay un nuevo posteo');
    
//     res.redirect('quotes.ejs');
// });



module.exports = rt;