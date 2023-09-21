// there are 5 steps to create the react app

// 1) import the react and reactDom libraries
import React from 'react';
import reactDom from 'react-dom/client'

// import the App file here
import App from './App'


// 2) get a reference to the div with ID root
const element = document.getElementById('root');

// 3) tell react to take control of that element
const root = reactDom.createRoot(element);


// 5) show the component on screen
root.render(<App />)