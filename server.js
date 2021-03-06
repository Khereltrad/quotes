const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//! Para ejecutar fase estáticas
app.use(express.static(__dirname+"/public"));

//! Para ejecutar fase vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//! para importar las rutas
app.use(require('./routes/routes'));

//! enrrutamientos
app.get("/quotes", (req, res) => {

    res.render("quotes",{quotes:quotes});
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

app.listen( port, () => console.log(`Listening on port: ${port}`) );