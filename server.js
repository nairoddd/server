const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = 3000
const {createCars, getAllCars, getOneCars, updateCars, deleteCars} = require('./controller/cars')

app.use(express.json())
app.use(cors())

app.get('/cars', async (req,res) => {
    const cars = await getAllCars();
    res.status(200).json(cars)
})

app.get('/cars/:id', async(req, res) => {
    const cars = await getOneCars(req.params.id)
    res.status(200).json(cars)
})

// app.post('/cars', async(req, res) => {
//     const result = await createCars(req.body)
//     res.status(201).json(result)
// })

// app.patch('/cars/:id', async(req, res) => {
//     const cars = await updateCars(req.params.id, req.body)
//      res.status(200).json(cars)
// })
// app.delete('/cars/:id', async (req,res) => {
//     await deleteCars(req.params.id)
//     res.status(200).json({success : true})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

