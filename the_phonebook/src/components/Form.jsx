/* eslint-disable react/prop-types */

export const Form = ({addPerson, handleNewName, handleNewNumber, newName, newNumber}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  );
}