import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import WinningLogic from "./Wins";

const User = (props) => {
    const { handleOnClick, userSelection, computerSelection } = props;

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
                    <div className="youruserSelection">
                        Your choice: {userSelection}
                    </div>
                </div>
            </div>
            <div className="cont2 cont col-md-3">
                <div className="cards">
                    <p>
                        <WinningLogic
                            userSelection={userSelection}
                            computerSelection={computerSelection}
                        />
                    </p>
                </div>
            </div>
        </>
    );
};
export default User;
