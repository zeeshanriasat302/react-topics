import React from 'react'

function ListRendering() {
    // list of names
    const names = ["zeeshan",'ali','abdullah','uziar']

    // list of objects
    const persons = [   {  id: 1,   "age": 35,    "name": "Jane Smith"     },  
                        {  id: 2,   "age": 42,    "name": "Mark Johnson"   },  
                        {  id: 3,   "age": 19,    "name": "Samantha Lee"   },  
                        {  id: 4,   "age": 51,    "name": "William Chen"   },  
                        {  id: 5,   "age": 28,    "name": "Emily Davis"    }
                    ]
    const nameList =  names.map((name) => <h3>{name}</h3>)
    const personObjects = persons.map(person => <h3 key={person.id} >  Name: {person.name} age: {person.age}</h3>)
  return (
    <div>
        <h1>Name List</h1>
        {nameList}
        <br/>
        <h1>List of objects</h1>
        {personObjects}
    </div>
  )
}

export default ListRendering