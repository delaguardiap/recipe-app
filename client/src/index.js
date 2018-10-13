//Import dependencies
import React from 'react';
//Extract the render function from react-dom by using the destructuring pattern
import { render } from 'react-dom';
//Import App component from ./components/App
import App from './components/App';

//Use the render method to render app as a child of an element in index.html with an
//id of 'root'
render(<App />, document.getElementById('root'));