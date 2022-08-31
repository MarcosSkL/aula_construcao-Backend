const express = require('express')
const app = express()

const Lista01Controller = require('../lista01/controllers/Lista01Controller')

app.use(express.urlencoded({extended: true}))

//01
app.post('/lista01/ex01', Lista01Controller.ex01)

//02
app.post('/lista01/ex02', Lista01Controller.ex02)

//03
app.post('/lista01/ex03', Lista01Controller.ex03)

//04
app.post('/lista01/ex04', Lista01Controller.ex04)

//05
app.post('/lista01/ex05', Lista01Controller.ex05)

//06
app.post('/lista01/ex06', Lista01Controller.ex06)

//07
app.post('/lista01/ex07', Lista01Controller.ex07)

//08
app.post('/lista01/ex08', Lista01Controller.ex08)

//09
app.post('/lista01/ex09', Lista01Controller.ex09)


app.listen(3001, () => {
    console.log('Servidor 3001 ON')
})

