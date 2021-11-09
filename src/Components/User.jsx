import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import small_rock from "../Images/small_rock.svg";
import small_paper from "../Images/small_paper.svg";
import small_scissor from "../Images/small_scissor.svg";
import WinningLogic from "./Wins";

const User = (props) => {
    const { handleOnClick, userSelection, computerSelection, userPoints,computerPoints } =
        props;

    return (
        <>
            <div className="users  col-lg-4 col-11">
                <div className="points">
                    <div className="win">
                        <h4>WIN</h4>
                    </div>
                    <div className="win-points">
                        <h1>{userPoints}</h1>
                    </div>
                </div>
                <div className="user-card cardd">
                    <div className="player">
                        <h2>PLAYER</h2>
                    </div>
                    <div className="large-icon">
                        <img
                            className="large-img"
                            src={
                                userSelection === "Rock"
                                    ? rock
                                    : userSelection === "Paper"
                                    ? paper
                                    : userSelection === "Scissor"
                                    ? scissor
                                    : ""
                            }
                            alt=""
                        />
                    </div>
                    <div className="user-selection-icons">
                        <div className="rock col-4">
                            <img
                                className="img"
                                src={small_rock}
                                alt="rock"
                                onClick={() => handleOnClick("Rock")}
                            />
                        </div>
                        <div className="paper col-4">
                            <img
                                className="img"
                                src={small_paper}
                                alt="paper"
                                onClick={() => handleOnClick("Paper")}
                            />
                        </div>
                        <div className="scissor col-4">
                            <img
                                className="img"
                                src={small_scissor}
                                alt="scissor"
                                onClick={() => handleOnClick("Scissor")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-card col-lg-3 col-11">
                <div className="cards">
                    <h3 className="winning">
                        <WinningLogic
                            userSelection={userSelection}
                            computerSelection={computerSelection}
                            computerPoints={computerPoints}
                            userPoints={userPoints}
                        />
                    </h3>
                </div>
            </div>
        </>
    );
};
export default User;
