import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome in Pridesys !</div>)
            :(<div>Welcome in Miracle !</div>)
        
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Welcome in Pridesys !</div>
        //     )}
        //     else{
        //         return <div> Welcome in Miracle !</div>
        // }
        // return (
        //     <div>
        //     <div>Welcome in Pridesys ! </div>
        //     <div> Welcome in Miracle !</div>
        //     </div>
        // )
    }
}

export default UserGreeting
