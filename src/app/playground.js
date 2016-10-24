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
                <div>
					Edit this text first to perform first reload,
					then click the text below to set state,
					then edit the text again
				</div>
				<p onClick={() => this.setState({test: "Some state is now set"})} > {this.state.test}</p>
			</div>
		)
	}
}
