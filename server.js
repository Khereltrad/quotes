const express = require("express");
const app = express();
const port = 8000;


app.use(express.static(__dirname+"/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//! enrrutamientos
app.get("/quotes", (req, res) => {
    res.render("quotes",{quotes:quotes});
});

app.get("/", (req, res) => {
    res.render("index");
});

const quotes = [
    {
        who: "",
        quote:""
    },
    {
        who: "",
        quote:""
    },
    {
        who: "",
        quote:""
    },
    {
        who: "",
        quote:""
    },
    {
        who: "",
        quote:""
    },
    {
        who: "",
        quote:""
    },

];



//? app.use(require('./routes/NOMBREDELARCHIVOQUEESTAENROUTES'));   //! Llamado de rutas

app.listen( port, () => console.log(`Listening on port: ${port}`) );


//?✌       EN EL TERMINAL

//^         node server.js
//          navegador vistar    localhost:8000/
       