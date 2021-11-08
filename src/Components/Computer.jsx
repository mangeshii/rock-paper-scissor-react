import paper from "../Images/paper.png";
import rock from "../Images/rock.png";
import scissor from "../Images/scissor.png";

const Computer = ({ computerSelection }) => {
    return (
        <>
            <div className="card col-lg-4 col-11">
                <h1>Computer</h1>
                <div className="rps">
                    <div className="rock col-4"></div>
                    <div className="paper col-4">
                        <img
                            src={
                                computerSelection === "Rock"
                                    ? rock
                                    : computerSelection === "Paper"
                                    ? paper
                                    : scissor
                            }
                            alt="paper"
                        />
                    </div>
                    <div className="scissor col-4"></div>
                </div>
                <div className="youruserSelection">
                    PC Selected: {computerSelection}
                </div>
            </div>
        </>
    );
};

export default Computer;






















