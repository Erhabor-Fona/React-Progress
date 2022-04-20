import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            increase: 0
        }
    }
    increamentState() {
        this.setState(previousState =>({
            increase: previousState.increase + 1
        }),
        ()=>{
            console.log(this.state.increase)
        }
        )
    }
    increa(){
        this.increamentState()
        this.increamentState()
        this.increamentState()
        this.increamentState()
        this.increamentState()
    }
    render() {
        return (
            <div>
                <div>
                    Count- {this.state.increase}
                </div>
                <button onClick={() => this.increa()}>Increament</button>
            </div>
        )
    }
}

export default Count