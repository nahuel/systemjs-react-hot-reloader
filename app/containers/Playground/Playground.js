import { Component } from 'react'
import { div } from 'dibbs/components'

class Playground extends Component {

    constructor() {
        super();

        this.state = {
            text: "Edit containers/Playground/Playground.js, observe componentDidMound function firing"
        }
    }

    componentDidMount() {
        console.log("This fires on edit :( ll")
    }

    render() {
        return (
            div({}, this.state.text)
        )
    }
}

export default Playground

console.log("Playground Imported")
