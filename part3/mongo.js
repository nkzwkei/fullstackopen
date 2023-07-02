const mongoose = require('mongoose')

// if(process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5) {
//     console.log('Please provide password or enough arguments')
//     process.exit(1)
// }

// const password = process.argv[2]

const link = process.env.DATABASE_URL

mongoose.set('strictQuery',false)
mongoose.connect(link)

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length === 3) {
    Person.find({}).then(persons => {
        console.log('phonebook:')
        persons.map(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}

else if(process.argv.length === 5) {
    const person = new Person({
        name : process.argv[3],
        number : process.argv[4]
    })
    person.save().then(result => {
        console.log(`added ${result.name} ${result.number}`)
        mongoose.connection.close()
    })
}

module.exports = Person




