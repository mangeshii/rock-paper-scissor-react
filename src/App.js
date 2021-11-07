import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
import { useState } from "react";


function App() {
    const [choice,setChoice]=useState()
     const handleOnClick=(props)=>{
        setChoice(props)
     }
    return (
        <div className="App container-fluid">
            <h1>Rock, paper, scissors!</h1>
            <h1>Round: </h1>
            <div className="containers col-md-8">
                <User handleOnClick={handleOnClick} choice={choice}/>
            </div>
        </div>
    );
}

export default App;
