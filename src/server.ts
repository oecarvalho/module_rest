import express from "express"

const PORT = 3333

const app = express();

app.get('/products', (request, response)=>{
    response.send(`Produtos`)
})

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
});