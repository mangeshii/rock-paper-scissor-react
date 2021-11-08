import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
import { useEffect, useState } from "react";
import Computer from "./Components/Computer";

function App() {
    const [rounds, setRounds] = useState(0);
    const [userSelection, setUserSelection] = useState("");
    const [computerSelection, setComputerSelection] = useState("");
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    const tools = ["Rock", "Paper", "Scissor"];

    const random = () => {
        const random = Math.floor(Math.random() * tools.length);
        setComputerSelection(tools[random]);
    };

    const handleOnClick = (props) => {
        setRounds(rounds + 1);
        setUserSelection(props);
        random();
    };

    useEffect(() => {
        if (
            (userSelection === "Rock" && computerSelection === "Paper") ||
            (userSelection === "Paper" && computerSelection === "Scissor") ||
            (userSelection === "Scissor" && computerSelection === "Rock")
        ) {
            setComputerPoints(computerPoints + 1);
        } else if (
            (userSelection === "Paper" && computerSelection === "Rock") ||
            (userSelection === "Scissor" && computerSelection === "Paper") ||
            (userSelection === "Rock" && computerSelection === "Scissor")
        ) {
            setUserPoints(userPoints + 1);
        }
    }, [rounds]);

    return (
        <>
            <div className="app">
                <div className="main-container">
                    <h2>ROUND {rounds} </h2>

                    <div className="components">
                        <User
                            handleOnClick={handleOnClick}
                            userSelection={userSelection}
                            computerSelection={computerSelection}
                            userPoints={userPoints}
                        />

                        <Computer
                            computerSelection={computerSelection}
                            computerPoints={computerPoints}
                        />

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
