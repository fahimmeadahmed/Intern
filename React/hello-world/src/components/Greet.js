import React, { Component } from 'react'

/*function Greet(){
    return <h1>Hello Fahim</h1>
}*/
const Greet= (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.degree} </h1>
            {props.children}
        </div>
        )
}
export default Greet