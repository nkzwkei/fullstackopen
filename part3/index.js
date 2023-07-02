const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const Person = require('./mongo')
const app = express()

morgan.token('body', (req, _) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

const errorHandler = (err, _, res, next) => {
    console.error(err.message)

    if(err.name === 'CastError') {
        return res.status(400).send({
            error: 'malformatted id'
        })
    } else if (err.name === 'ValidationError') {
        console.log('valid error')
        return res.status(400).json({ error : err.message })
    }

    next(err)
}

const unknownEndpoint = (_, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.get('/', (_, res) => {
    return res.send('<h1>Hi</h1>')
})

app.get('/info', (_, res) => {
    const today = new Date(Date.now())
    const length = Person.find({}).length
    res.send(`<p>Phone book has info for ${length} people<br><p>${today.toUTCString()}</p>`)
})

app.get('/api/persons', (_, res) => {
    Person.find({}).then(persons => {
        return res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        return res.json(person)
    }).catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
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
    }).catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const { body } = req

    if(!body.name || !body.number) {
        return res.status(404).send({
            error: 'the name or number is missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new : true}).then(
        updatedPerson => {
            return res.json(updatedPerson)
        }
    ).catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id).then(
        _ => {
            return res.status(204).end() 
        }
    ).catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// can't delay today