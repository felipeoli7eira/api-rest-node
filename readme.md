# API Rest com express e NodeJS

Esse projetinho tem como objetivo ajudar no entendimento
do funcionamento de uma API que usa a arquitetura __Rest__.
O Banco de dados usado nele é simplesmente uma __const__ que guarda um array de objetos. Por hora não quis implementar um Banco de dados real, mas dessa maneira já é possível ver um CRUD acontecendo nessa const. Basta usar como client um postman da vida.
Ela está pronta para interpretar e responder aos verbos __GET__, __POST__, __PUT__ e __DELETE__, sendo os endpoints criados:

`
    GET http://localhost:8080/games
`

`
    GET http://localhost:8080/game/{id}
`

`
    POST http://localhost:8080/game
`

`
    PUT http://localhost:8080/game/{id}
`

`
    DELETE http://localhost:8080/game/{id}
`

O recurso tem a seguinte arquitetura (ainda não disse, mas eu quis criar uma API de games nesse caso):

`
    {
        id: ...,
        name: ...,
        year: ...,
        price: ...
    }
`

<hr>

Felipe Oliveira

[Instagram](https://www.instagram.com/felipeoli7eira/)

[LinkedIn](https://www.linkedin.com/in/felipeoli7eira/)