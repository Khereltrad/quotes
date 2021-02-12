const express = require("express");
const app = express();
const port = 8000;


//! Para ejecutar fase estáticas
app.use(express.static(__dirname+"/public"));

//! Para ejecutar fase vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//! para importar las rutas
app.use(require('./routes/routes'));


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//! enrrutamientos
app.get("/quotes", (req, res) => {

    res.render("quotes",{quotes:quotes});
});

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/quotes", (req, res) => {
    quotes.push({
        who: req.body.author,
        quote:req.body.cita
        // hour:"",
        // when:""
    });
    
    res.redirect("/quotes");
});

const quotes = [
    {
        who: "Platon",
        quote:"La pobreza no viene por la disminución de las riquezas, sino por la multiplicación de los deseos",
        // hour:"",
        // when:""
    },
    {
        who: "Aristóteles",
        quote:"La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
        // hour:"",
    //     when:""
    },
    {
        who: "Zenón de Citio",
        quote:"Tenemos dos orejas y una sola boca, justamente para oír más y hablar menos",
    //     hour:"",
    //     when:""
    },
    {
        who: "Epicuro de Samos",
        quote:"El hombre que no se contenta con poco, no se contenta con nada",
    //     hour:"",
    //     when:""
    },
    {
        who: "Lao Tse",
        quote:"Deja de pensar y termina con tus problemas",
    //     hour:"",
    //     when:""
    },
    {
        who: "Buda",
        quote:"La paz viene de adentro, no la busques afuera",
    //     hour:"",
    //     when:""
    },

];


// app.get('/quotes', async(req,res) => {
//     await new_quote.create({
//         who:    req.body.author,
//         quotes: req.body.cita
//     });
//     console.log('hay un nuevo posteo');
    
//     res.redirect('quotes.ejs');
// };


// app.post("/quotes", async (req,res) => {
//     const new_cuote = await quote.create({
//         who:    req.body.author,
//         quotes:  req.body.cita
//     });
//     console.log('hay un nuevo posteo');
    
//     res.redirect('quotes.ejs');
// });

app.listen( port, () => console.log(`Listening on port: ${port}`) );

