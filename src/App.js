import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Computer from "./Components/Computer";
import Person from "./Components/Person";

function App() {
    const [state, setState] = useState(0);
    const [choice, setChoice] = useState("Pick one");

    const handleOnClick = (prop) => {
        setState(state + 1);
        setChoice(prop);
    };
    return (
        <div className="App container-fluid">
            <h1>Rock, paper, scissors!</h1>
            <h1>Round: {state}</h1>
            <div className="containers col-md-8">
                <Person
                    handleOnClick={handleOnClick}
                    choice={choice}
                />
                <div className="cont2 cont col-md-3">
                    <div className="cards">vs</div>
                </div>
                <Computer />
            </div>
        </div>
    );
}

export default App;
