import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} {this.props.ninjaName}</h1>
    }
}

export default Welcome
