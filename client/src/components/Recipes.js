import React from 'react';
import Recipe from './Recipe';

class Recipes extends React.Component {
	render() {
		// The Recipes components maps over this.props.recipes and creates
		// a new instance of Recipe with a recipe prop equals to the element which is
		// currently being iterated over, and a key prop which will hold a value equals to
		// the string 'recipe' with the index appended to it.
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