import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Form } from "./components/Form";
import { Persons } from "./components/Persons";
import personsService from "./services/persons"
import { Notification } from "./components/Notification";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationStyle, setNotificationStyle] = useState(null);

  const hook = () => {
    personsService.getAll().then((allData) => {
      setPersons(allData);
    })
  }

  useEffect(hook, []);

  const filteredPeople = searchName === '' ? [...persons] :
    persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      const validacao = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      persons.forEach((person, index) => {
        if (person.name === newName && validacao) {
          personsService.update(person.id, { ...person, number: newNumber }).then(response => {
            const newPersons = [...persons];
            newPersons[index] = response;
            setPersons(newPersons);
          })
          .catch(() => {
            setNotification(`Information of ${newName} has already been removed from server`);
            setNotificationStyle('notificationErro');
            setTimeout(() => {
              setNotification('');
              setNotificationStyle(null);
            }, 5000);
          });
        }
      });
    } else {
      const personsUpdate = {
        name: newName,
        number: newNumber
      }

      personsService.create(personsUpdate)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote));
          setNotification(`Added ${newName}`);
          setNotificationStyle('notificationAdd');
          setNewName('');
          setNewNumber('');
          setTimeout(() => {
            setNotification('');
            setNotificationStyle(null);
          }, 5000);
        })
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  }

  const handleDeletePerson = (id, name) => {
    const validacao = window.confirm(`Delete ${name}?`);
    if (validacao) {
      const newPersons = persons.filter(person => person.id !== id);
      personsService.remove(id).then(
        setPersons(newPersons)
      );
      console.log('Deletou a nota ...')
    } else {
      console.log('Desistiu de deletar a nota ...')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} className={notificationStyle} />
      <Filter onChange={handleSearchName} searchName={searchName} />
      <Form addPerson={addPerson} handleNewName={handleNewName} handleNewNumber={handleNewNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons filteredPeople={filteredPeople} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}
