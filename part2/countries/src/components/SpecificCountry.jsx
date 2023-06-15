import { useEffect, useState } from "react"
import axios from 'axios'

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

const SpecificCountry = ({ country }) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&q=${country.capital[0]}&aqi=no`)
        .then(response => response.data)
        .then(w => setWeather(w))
    }, [country.capital])

    if(weather)
        return (
            <>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital[0]}</p>
                <p>area {country.area}</p>
                <p><b>languages:</b></p>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <img alt={country.flags.alt} src={country.flags.png} width={150} height={150}/>
                <h2>Weather in {country.capital[0]}</h2>
                <p>temperature {weather.current.temp_c} Celcius</p>
                <img alt={weather.current.condition.text} src={weather.current.condition.icon} />
                <p>wind {weather.current.wind_kph} km/h</p>
            </>
        )
}

export default SpecificCountry