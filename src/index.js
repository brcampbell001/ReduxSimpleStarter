import React from 'react'; // go find library called react and assign to variable React
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAekLdm3wFv5ejnMUhp-Q-a270CMZS0GPE';

// Create a new component. This component should produce some HTML
const App = () => {
    return ( 
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// creates an instance of app <App />    Just App would be a class component not an instance of the component
// document.querySelector and go and find parent div container to render App in
