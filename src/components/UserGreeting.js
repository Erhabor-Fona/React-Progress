import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Fona</div>
        // Tenary Operators
        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Fona</div>:
        //     <div>Welcome Guest</div>
        // )
        //Element variable 
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Fona</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message


        // //IF Else Rendering
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Fona</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting
