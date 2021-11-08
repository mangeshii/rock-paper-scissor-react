import paper from "../Images/paper.png";
import rock from "../Images/rock.png";
import scissor from "../Images/scissor.png";

const Computer = ({ computerSelection ,computerPoints}) => {
    return (
        <>
            <div className="computer col-lg-4 col-11">
                <div className="points">
                <div className="win"><h2>WIN</h2></div>
                    <div className="win-points">{computerPoints}</div>
                </div>
                <div className="computer-card cardd">
                    <div className="computer-heading">
                        <h2>COMPUTER</h2>
                    </div>
                    <div className="rps">
                        <div className="paper large-icon col-4">
                            <img
                                className="large-img"
                                src={
                                    computerSelection === "Rock"
                                        ? rock
                                        : computerSelection === "Paper"
                                        ? paper
                                        : computerSelection === "Scissor"
                                        ? scissor
                                        : ""
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="pc-selection-msg">
                        {computerSelection === ""
                            ? "Waiting for your selection!"
                            : `PC Selected: ${computerSelection}`}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Computer;
