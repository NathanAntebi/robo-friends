import React, { Component } from 'react'
import { robots } from './Robots';
import CardList from "./CardList";
import SearchField from './SearchField'
import 'tachyons'


class App extends Component{
	constructor(props){
		super(props);
		this.state={
			search: '',
			robots: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(user => this.setState({robots: user}))
	}

	changeText = (event) => {
		this.setState({search: event.target.value})
		console.log(event.target.value);
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
		})
		return(
			<div className= "tc">
				<h1>ROBOFRIENDS</h1>
				<SearchField onChange={this.changeText} />
				<CardList robots={filteredRobots} />
			</div>
		     )
	}
}

export default App;