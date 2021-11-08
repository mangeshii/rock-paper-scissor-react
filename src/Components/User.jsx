import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import WinningLogic from "./Wins";

const User = (props) => {
    const { handleOnClick, userSelection, computerSelection } = props;

    return (
        <>
            <div className="card col-lg-4 col-11">
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
                    {userSelection === ""
                        ? "Pick one!"
                        : `Your choice: ${userSelection}`}
                </div>
            </div>
            <div className="cardd col-lg-3 col-11">
                <div className="cards">
                    <h3>
                        <WinningLogic
                            userSelection={userSelection}
                            computerSelection={computerSelection}
                        />
                    </h3>
                </div>
            </div>
        </>
    );
};
export default User;









