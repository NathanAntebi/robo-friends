import React, { Component } from 'react';
import Card from "./Card.js"

class CardList extends Component{
	render(){
		const cardComponent = this.props.robots.map((user, i) => {
			return <Card name={this.props.robots[i].name} email={this.props.robots[i].email} id={this.props.robots[i].id} />
		})
		return(
			<div>
				{cardComponent}
				
				</div>

			)
	}
}
export default CardList;