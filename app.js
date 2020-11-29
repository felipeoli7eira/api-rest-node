/** require */
const express = require( "express" )
const app = express()

/** config */
app.use( express.json() )
app.use( express.urlencoded( {extended: false} ) )

const Database = {

    games: [
        {id: 1, name: 'Call of Dutty', year: 2009, price: 59.90},
        {id: 2, name: 'GTA V', year: 2006, price: 30.20},
        {id: 3, name: 'CS:GO', year: 2014, price: 29.50}
    ]
}

/** route */
app.get( "/games", (req, res) => {

    res.statusCode = 200
    res.json( Database.games )
} )

app.get( "/game/:id", (req, res) => {

    const {id} = req.params

    if( Number.isNaN( id ) )
    {
        res.statusCode = 400 /** requisição inválida */

        res.json(
            {
                message: "Requisição inválida (Bad Request)",
                success: false,
                statusCode: 400,
                data: null
            }
        )
        return false
    }
    else
    {
        let intID = parseInt( id )

        let game = Database.games.find( game => game.id === intID )

        if( game === undefined )
        {
            res.statusCode = 404 /** Recurso não encontrado (Not Found) */
            res.json(
                {
                    message: "Recurso não encontrado (Not Found)",
                    success: false,
                    statusCode: 404,
                    data: null
                }
            )
            return false
        }

        res.statusCode = 200 /** Requisição bem sucedida */
        res.json(
            {
                message: "Recurso encontrado",
                success: true,
                statusCode: 200,
                data: game
            }
        )
        return true
    }
} )

/** listen */
app.listen( 8080, () => console.log("running...") )