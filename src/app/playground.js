import React, { Component } from "react"

export default
class Playground extends React.Component {

	constructor() {
		super()
		this.state = {
			test: "Click me to set some state"
		}
		console.log("Playground constructor ran")
	}

	render() {
		return (
			<div>
				<p onClick={() => this.setState({test: "Some state is now set"})} > {this.state.test}</p>
                <div>Some text to test hotreloading asdf</div>
			</div>
		)
	}
}
