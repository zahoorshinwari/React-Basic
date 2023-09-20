// there are 5 steps to create the react app

// 1) import the react and reactDom libraries
import React from 'react';
import react from 'react';
import reactDom from 'react-dom/client'

// 2) get a reference to the div with ID root
const element = document.getElementById('root');

// 3) tell react to take control of that element
const root = reactDom.createRoot(element);

// 4) create a component
function App() {

    let message = 'Bye there! it become completed.'
    if(Math.random() > 0.5){
        message = 'hello there! this is our first react App.'
    }

    return <h1>{message}</h1>
    //return React.createElement("h1", null, "hi there!");

}

// 5) show the component on screen
root.render(<App />)