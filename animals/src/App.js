// importing the css
import './App.css'


// here is importing the usestate to re-render the browser
// state are the data that can be change when the user interact with our application
// when data is changed then react will update content on screen automatically
import { useState } from "react";

// importing the animal show file
import AnimalShow from "./AnimalShow";

// create the function that return the random animals
function getRandomAnimal() {
    const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {    
    // count is used for the piece of state
    // setcount is used to change the piece of state
    // usestate(0) is the starting value of piece of data
    // usestate can return an array
    // const [count , setCount] = useState(0);
    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    const [animals , setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals ,  getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });
    
    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App;