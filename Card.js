import React, { Component } from 'react'


class Card extends Component{
	render(){
		return(
			<div className="bg-light-green dib pa3 ma2 grow tc br3">
			<img src={`https://robohash.org/${this.props.id}?200x200`}/>
			<h1>{this.props.name}</h1>
			<h2>{this.props.email}</h2>
			</div>
			)
	}
}

export default Card