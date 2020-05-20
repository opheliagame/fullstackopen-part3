require('dotenv').config()
const express = require('express')
const app = express()

const Person = require('./models/person')

app.use(express.static('build'))
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


// GETTING ALL PEOPLE IN THE PHONEBOOK
app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

// GET ONE PERSON IN THE PHONEBOOK
app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
    .then(person => {
        if(person) {
            res.json(person)
        }
        else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

// DELETE A PERSON FROM THE PHONEBOOK
app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

// const generateId = () => {
//     return Math.floor(Math.random() * 1000)
// }

// MAKE A NEW PERSON ENTRY IN THE PHONEBOOK
app.post('/api/persons', (req, res, next) => {
    const body = req.body

    const person = new Person({
        name: body.name,
        phone: body.phone,
    })

    person.save()
    .then(savedPerson => {
        res.json(savedPerson)
    })
    .catch(error => next(error))
})

// UPDATE AN EXISTING PERSON 
app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
        name: body.name,
        phone: body.phone,
    }

    Person.findByIdAndUpdate(req.params.id, person, {new: true, runValidators: true, context: 'query'})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.get('/info', (req, res) => {
    Person.find({})
        .then(result => {
            const info = `Phonebook has info for ${result.length} people`
            const date = Date(Date.now())
            res.send(info + "\n" + date)
        })
    
})

const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if(error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if(error.name === 'ValidationError') {
        return res.status(400).send({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT    
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})