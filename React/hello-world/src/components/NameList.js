import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Mead','Ahmed','Fahim']
    const persons = [
        {
        id: 1,
        name: 'Mead',
        age: 30,
        skill:'React'
        },
        {
        id: 2,
        name: 'Ahmed',
        age: 25,
        skill:'C#'
        },
        {
        id: 3,
        name: 'Fahim',
        age: 31,
        skill:'Javascript'
        },
    ]
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
                {/* // nameList
                // names.map(name => <h2>{name}</h2>)
            }            */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* <h2>Mead</h2>
            <h2>Ahmed</h2>
            <h2>Fahim</h2> */}
        </div>
    )
}

export default NameList
