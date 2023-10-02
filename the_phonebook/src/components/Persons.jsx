/* eslint-disable react/prop-types */

import { Button } from "./Button";

export const Persons = ({filteredPeople, handleDeletePerson}) => {
  return (
    <>
        {filteredPeople.map(person => <p key={person.id}>{person.name} {person.number} <Button content="Delete" type="button" onClick={() => handleDeletePerson(person.id, person.name)} /></p>)}
    </>
  );
}