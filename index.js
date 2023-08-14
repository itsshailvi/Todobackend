const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 4200

app.use(cors())
mongoose.connect('mongodb://localhost:27017/collectionMini', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.json())
// const todos = [{
//     id: 0,
//     item: 'hello0'
// },
// {
//     id: 1,
//     item: 'hello1'
// },
// {
//     id: 2,
//     item: 'hello2'
// }]
// app.get('/', (req, res) => {
//   res.send(todos)
// })

// app.post('/', (req, res) => {
//     console.log(req.body, 'request')
//     res.send({message: 'successful'})
//   })
const todoRoute = require('./routes/todoRoute')
app.use('/',todoRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})