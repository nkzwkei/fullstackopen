const PersonForm = ({ name, formHandles }) => {
    const { handleAddPerson, handleNameChange } = formHandles

    return (
        <form onSubmit={handleAddPerson}>
            <div>
                name: <input value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm