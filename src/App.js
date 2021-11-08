import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
import { useState } from "react";
import Computer from "./Components/Computer";

function App() {
    const [rounds, setRounds] = useState(0);
    const [userSelection, setUserSelection] = useState("");
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    const tools = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * tools.length);
    const computerSelection = tools[random];

    const handleOnClick = (props) => {
        setRounds(rounds + 1);
        setUserSelection(props);
    };

    // if (
    //     (userSelection === "Rock" && computerSelection === "Paper") ||
    //     (userSelection === "Paper" && computerSelection === "Scissor") ||
    //     (userSelection === "Scissor" && computerSelection === "Rock")
    // ) {
    //     setComputerPoints(computerPoints + 1);
    //     console.log(computerPoints);
    // } else if (
    //     (userSelection === "Paper" && computerSelection === "Rock") ||
    //     (userSelection === "Scissor" && computerSelection === "Paper") ||
    //     (userSelection === "Rock" && computerSelection === "Scissor")
    // ) {
    //     setUserPoints(userPoints + 1);
    // }

    return (
        <>
            <div className="app">
                <div className="main-container">
                    <h1>Rock, paper, scissors!</h1>
                    <h1>Round:{rounds} </h1>
                    <div className="components">
                        <User
                            handleOnClick={handleOnClick}
                            userSelection={userSelection}
                            computerSelection={computerSelection}
                        />

                        <Computer computerSelection={computerSelection} />
                    <div className="points_cont">
                        <div className="col-md-4"><h1>{userPoints}</h1></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"><h1>{computerPoints}</h1></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

