import { useState } from 'react'
import SpecificCountry from './SpecificCountry'

const Country = ({ country }) => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    if(!show)
        return (
            <>
                <p>{country.name.common}<button onClick={handleShow}>show</button></p>
            </>
        )

    return (
        <>
            <p><button onClick={handleShow}>hide</button></p>
            <SpecificCountry country={country} /> 
        </>
    )
}

export default Country