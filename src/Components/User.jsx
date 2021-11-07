import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";

const User = (props) => {
    const { handleOnClick, choice } = props;
    const tools = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * tools.length);
    const computerSelection = tools[random];

    console.log(computerSelection, choice);
    const matchdetails = () => {
        if (choice === "Rock" && computerSelection === "Paper") {
            return "computer wins";
        } else if (choice === "Paper" && computerSelection === "Rock") {
            return "user wins";
        } else if (choice === "Paper" && computerSelection === "Scissor") {
            return "computer wins";
        } else if (choice === "Scissor" && computerSelection === "Paper") {
            return "user wins";
        } else if (choice === "Rock" && computerSelection === "Scissor") {
            return "user wins";
        } else if (choice === "Scissor" && computerSelection === "Rock") {
            return "computer wins";
        } else {
            return "Its a tie";
        }
    };
    return (
        <>
            <div className="cont1 cont col-md-4">
                <div className="card">
                    <div className="player">
                        <h1>Player 1</h1>
                    </div>
                    <div className="rps">
                        <div className="rock col-4">
                            <img
                                src={rock}
                                alt="rock"
                                onClick={() => handleOnClick("Rock")}
                            />
                        </div>
                        <div className="paper col-4">
                            <img
                                src={paper}
                                alt="paper"
                                onClick={() => handleOnClick("Paper")}
                            />
                        </div>
                        <div className="scissor col-4">
                            <img
                                src={scissor}
                                alt="scissor"
                                onClick={() => handleOnClick("Scissor")}
                            />
                        </div>
                    </div>
                    <div className="yourchoice">Your Choice is {choice}</div>
                </div>
            </div>
            <div className="cont2 cont col-md-3">
                <div className="cards">
                    <p>{` hello ${matchdetails()}`}</p>
                </div>
            </div>
            <div className="cont3 cont col-md-4">
                <div className="card">
                    <div className="player">
                        <h1>Computer</h1>
                    </div>
                    <div className="rps">
                        <div className="rock col-4"></div>
                        <div className="paper col-4">
                            <img
                                src={
                                    random === 0
                                        ? rock
                                        : random === 1
                                        ? paper
                                        : scissor
                                }
                                alt="paper"
                            />
                        </div>
                        <div className="scissor col-4"></div>
                    </div>
                    <div className="yourchoice">
                        PC Selected: {computerSelection}
                    </div>
                </div>
            </div>
        </>
    );
};
export default User;
