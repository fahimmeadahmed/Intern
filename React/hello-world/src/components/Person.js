import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2> i am {person.name}.I am {person.age} years young .I know {person.skill} 
            </h2>
        </div>
    )
}

export default Person
