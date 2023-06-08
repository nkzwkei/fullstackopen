const PersonForm = ({ name, number, formHandles }) => {
    const { handleAddPerson, handleNameChange, handleNumberChange } = formHandles

    return (
        <form onSubmit={handleAddPerson}>
            <div>
                name: <input value={name} onChange={handleNameChange} required /> <br />
                number: <input value={number} onChange={handleNumberChange} required />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm