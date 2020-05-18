const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
morgan.token('body', (req, res) => {
    const body = JSON.stringify(req.body)
    if(body === JSON.stringify({})) {
        return ''
    }
    else {
        return body
    }
})
const logging = morgan(':method :url :status :res[content-length] - :response-time ms :body')
app.use(logging)

let persons = [
    {
        name: "Arto Hellas",
        phone: "040-123456",
        id: 1 
    },
    {
        name: "Ada Lovelace",
        phone: "39-44-5323523",
        id: 4
    },
    {
        name: "Dan Abramov",
        phone: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        phone: "39-23-6423122",
        id: 5
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * 1000)
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body.name) {
        return res.status(400).json({
            error: 'name is missing'
        })
    }

    if(!body.phone) {
        return res.status(400).json({
            error: 'number is missing'
        })
    }

    let person = persons.find(p => p.name === body.name)
    if(person) {
        return res.status(400).json({
            error: 'name already present in phonebook'
        })
    }

    person = {
        name: body.name,
        phone: body.phone,
        id: generateId()
    }

    persons = persons.concat(person)
    res.json(person)
})

app.get('/info', (req, res) => {
    const info = `Phonebook has info for ${persons.length} people`
    const date = Date(Date.now())
    res.send(info + "\n" + date)
})

const PORT = 3001   
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})