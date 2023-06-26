import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getPersonById = ({ id }) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const addPerson = person => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const updatePerson = person => {
    const request = axios.put(`${baseUrl}/${person.id}`, person)
    return request.then(response => response.data)
}

const deletePerson = ({ id }) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const methods = { addPerson, getPersons, getPersonById, deletePerson, updatePerson }

export default methods