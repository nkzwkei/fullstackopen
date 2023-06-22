const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const Person = require('./mongo')


const app = express()
// const requestLogger = (req, _, next) => {
//     console.log('Method:', req.method)
//     console.log('Path:  ', req.path)
//     console.log('Body:  ', req.body)
//     console.log('---')
//     next()
// }

morgan.token('body', (req, _) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]



const unknownEndpoint = (_, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// const generateId = () => {
//     const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0
//     return maxId+1
// }

app.get('/', (_, res) => {
    return res.send('<h1>Hi</h1>')
})

app.get('/info', (_, res) => {
    const today = new Date(Date.now())
    res.send(`<p>Phone book has info for ${persons.length} people<br><p>${today.toUTCString()}</p>`)
})

app.get('/api/persons', (_, res) => {
    Person.find({}).then(persons => {
        return res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        return res.json(person)
    })
})

app.post('/api/persons', (req, res) => {
    const { body } = req

    if(!body.name || !body.number) {
        return res.status(404).send({
            error: 'the name or number is missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})