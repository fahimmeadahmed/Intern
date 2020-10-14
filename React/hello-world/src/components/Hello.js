import React from 'react'
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Fahim</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id: 'hello', className : 'dummyClass'},
         React.createElement('h1', null, 'how is Life going?'))
}
export default Hello
