// 4) create a component
function App() {


    // printing the variable
    // let message = 'Bye there! it become completed.'
    // if(Math.random() > 0.5){
    //     message = 'hello there! this is our first react App.'
    // }

    // return <h1>{message}</h1>
    //return React.createElement("h1", null, "hi there!");


    // printing the expression
    // printing the local time
    //const date = new Date();
    //const time = date.toLocaleTimeString();

    //return <h1>The time is : {new Date().toLocaleTimeString()}</h1>



    // to return more than one variable
    // const name = "zahoor shinwari";
    // const age = 23;

    // return (
    //     <h1>
    //         my name is : {name} and, age is : {age}
    //     </h1>
    // )



    // we will return more than one tag which will enclosed in the div tag
    // const sum = 1 + 1 + 1;
    // const message = "above are the addition"
    
    // return <div>
    //     <h1>addition are : {sum}</h1>
    //     <p>{message}</p>
    // </div>





    // customizing elements with props
    // we can pass the variable as a properties to jsx
    
    // const inputType = "number";
    // const minValue = 5;
    // return <input type={inputType} min={minValue}/>


    // giving multiple type properties to the tag
    // return (
    //     <div>
            
    //         <label>select number :</label>
    //         <input type='number' min={5} max={10} placeholder='enter number from 5 to 10' style={{border:"3px solid red", height:"20%", width:"40%"}} />
    //  </div>
    //)




    // 5 rules of converting the html element to jsx
    // 1) all the properties names must follow the camelcase
    // return (
    //     <div>
    //         <textarea autoFocus={true}></textarea> <br/>
    //         <label>Enter your password :</label>
    //         <input type='password' minLength={7} maxLength={10}></input>
    //     </div>
    // ) 





    // 2) the number attributes use the curly braces
    // return <input maxLength={5}/>




    // 3) the boolean 'true' can be written with just the property name. false should be written with curly braces
    // return (
    //     <div>
    //         <label>checked spelling : </label>
    //         <input spellCheck="true"/>
    //         <br/>
    //         <label>Not checking spelling : </label>
    //         <input spellCheck={false}/>
    //     </div>
    // )




    // 4) In jsx the class attribute is written as className
        // return (
        //     <div>
        //         <p className="para1">this is paragraph no 1</p>
        //     </div>
        // )    




    // 5) In jsx in-line styles are provided as objects
    return (
        <div className="col-12" style={{color:"red" , background:"yellow", border:"2px solid black", fontFamily:"sans-serif", fontWeight:"bold", padding:"10px"}}>
            <h1>this is heading no 1</h1>
            <p>hello this is paragraph no 1 that we are provided it for the practice</p>
            <h2>The below  can show the all information about upto now course</h2>
            <a href="https://jsx-notes.vercel.app/">Information</a>
        </div>
    )


    
    }



// export this file by default to another file
export default App;



