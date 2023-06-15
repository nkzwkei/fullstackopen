import SpecificCountry from './SpecificCountry'
import Country from './Country'

const Display = ({ countries }) => {
    if(countries.length > 10) 
        return (
            <p>Too many matches, specify another filter</p>
        )

    if(countries.length > 1)    
        return (
            <>
                {countries.map(country => <Country country={country} />)}
            </>
        )

    if(countries.length === 1)
        return (
            <SpecificCountry country={countries[0]} />
        )
    
    return (
        <p>Sorry ! None matches !</p>
    )
}

export default Display