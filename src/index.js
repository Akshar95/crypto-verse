import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); 
// inside ReactDOM.render we pass the app
// as a component as a first parameter and then 
// get element root to hook our app onto our root div
// behind the scenes it means we have 1 index.html file
