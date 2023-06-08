import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addPerson = person => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const methods = { addPerson, getPersons }

export default methods