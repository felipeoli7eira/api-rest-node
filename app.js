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
app.get( "/games", (req, res) => { /** all */

    res.statusCode = 200
    res.json( Database.games )
} )

app.get( "/game/:id", (req, res) => { /** by id */

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

app.post( "/game", (req, res) => { /** create resource */

    const {name, year, price} = req.body

    if( name != undefined && year != undefined && price != undefined )
    {
        if( name != "" && year != "" && price != "" )
        {
            if( !Number.isNaN( year ) && year.length === 4 && !Number.isNaN( price ) )
            {
                const _id = Date.now()
                let _year = parseInt( year )
                let _price = parseFloat( price )

                Database.games.push(
                    {
                        id: _id,
                        name,
                        year: _year,
                        price: _price
                    }
                )

                res.statusCode = 201 /** Recurso criado */
                res.json(
                    {
                        message: "Recurso criado",
                        success: true,
                        statusCode: 201,
                        data: Database.games.find( game => game.id === _id )
                    }
                )
                return true
            }
            else
            {
                res.statusCode = 400 /** Requisição mau feita */
                res.json(
                    {
                        message: "As informações passadas não atendem aos requisitos",
                        success: false,
                        statusCode: 400,
                        data: null
                    }
                )
                return false
            }
        }
        else
        {
            res.statusCode = 400 /** Requisição mau feita */
            res.json(
                {
                    message: "Uma ou mais informações obrigatórias não foram passadas",
                    success: false,
                    statusCode: 400,
                    data: null
                }
            )
            return false
        }
    }
    else
    {
        res.statusCode = 400 /** Requisição mau feita */
        res.json(
            {
                message: "Nome, Ano e Preço são obrigatórios",
                success: false,
                statusCode: 400,
                data: null
            }
        )
        return false
    }
} )

app.delete( "/game/:id", (req, res) => {

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

        let game = Database.games.findIndex( game => game.id === intID ) // true: 0 || 0 > ... false: -1

        if( game === -1 )
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
        else
        {
            res.statusCode = 200 /** Requisição bem sucedida */

            Database.games.splice(game, 1)
            res.json(
                {
                    message: "Recurso deletado",
                    success: true,
                    statusCode: 200,
                    data: game.id
                }
            )
            return true
        }
    }
} )

app.put( "/game/:id", (req, res) => {

    
} )

/** listen */
app.listen( 8080, () => console.log("running...") )