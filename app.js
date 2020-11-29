/** require */
const express = require("express")
const app = express()

/** config */
app.use( express.json() )
app.use( express.urlencoded( {extended: false} ) )

const Database = {

    games: [
        {id: 1, name: 'Call of Dutty', year: 2009, price: 59.90},
        {id: 1, name: 'GTA V', year: 2006, price: 30.20},
        {id: 1, name: 'CS:GO', year: 2014, price: 29.50}
    ]
}

function stts(code)
{

}

/** route */
app.get("/games", (req, res) => {

})

/** listen */
app.listen(8080, () => console.log("running..."))