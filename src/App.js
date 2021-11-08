import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
import { useState } from "react";
import Computer from "./Components/Computer";

function App() {
    const [rounds, setRounds] = useState(0);
    const [userSelection, setUserSelection] = useState();

    const tools = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * tools.length);
    const computerSelection = tools[random];

    const handleOnClick = (props) => {
        setRounds(rounds + 1);
        setUserSelection(props);
    };
    return (
        <div className="App container-fluid">
            <h1>Rock, paper, scissors!</h1>
            <h1>Round:{rounds} </h1>
            <div className="containers col-md-8">
                <User
                    handleOnClick={handleOnClick}
                    userSelection={userSelection}
                    computerSelection={computerSelection}
                />
                <Computer computerSelection={computerSelection} />
            </div>
        </div>
    );
}

export default App;
