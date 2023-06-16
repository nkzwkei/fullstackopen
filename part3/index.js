const express = require('express')
const app = express()

app.use(express.json())

const persons = [
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

app.get('/', (_, res) => {
    return res.send('<h1>Hi</h1>')
})

app.get('/info', (_, res) => {
    const today = new Date(Date.now())
    res.send(`<p>Phone book has info for ${persons.length} people<br><p>${today.toUTCString()}</p>`)
})

app.get('/api/persons', (_, res) => {
    return res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(per => per.id === id)

    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})