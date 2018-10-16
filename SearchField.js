import React from 'react'
import 'tachyons'

const SearchField = (props) => {
	return <input className="bg-light-blue pa3 ma3" onChange={props.onChange} type="text" placeholder="Search for robot" />
			
		
}

export default SearchField;