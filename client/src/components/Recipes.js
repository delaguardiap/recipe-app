import React from 'react';
import Recipe from './Recipe';

class Recipes extends React.Component {
	render() {
		return (
			<div>
				{this.props.recipes.map(function(element, index) {
					return <Recipe recipe={element} key={`recipe${index}`}/>
				})}
			</div>
		)
	}
}

export default Recipes;