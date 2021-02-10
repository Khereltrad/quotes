const express = require("express");
const {Router} = require('express');
const app = express();
const rt = Router();
const port = 8000;


app.use(express.static(__dirname+"/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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
        who: "sdfsfsd",
        quote:"rtet",
        // hour:"",
        // when:""
    },
    // {
    //     who: "",
    //     quote:"",
    //     hour:"",
    //     when:""
    // },
    // {
    //     who: "",
    //     quote:"",
    //     hour:"",
    //     when:""
    // },
    // {
    //     who: "",
    //     quote:"",
    //     hour:"",
    //     when:""
    // },
    // {
    //     who: "",
    //     quote:"",
    //     hour:"",
    //     when:""
    // },
    // {
    //     who: "",
    //     quote:"",
    //     hour:"",
    //     when:""
    // },

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
