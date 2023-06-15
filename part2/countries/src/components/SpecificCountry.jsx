const SpecificCountry = ({ country }) => {
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
        </>
    )
}

export default SpecificCountry