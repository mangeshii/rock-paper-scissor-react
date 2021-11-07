import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";

const Person = (props) => {
    const { choice, handleOnClick } = props;

    return (
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
                            onClick={() => {
                                handleOnClick("rock");
                            }}
                        />
                    </div>
                    <div className="paper col-4">
                        <img
                            src={paper}
                            alt="paper"
                            onClick={() => handleOnClick("paper")}
                        />
                    </div>
                    <div className="scissor col-4">
                        <img
                            src={scissor}
                            alt="scissor"
                            onClick={() => handleOnClick("scissor")}
                        />
                    </div>
                </div>
                <div className="yourchoice"> {choice}</div>
            </div>
        </div>
    );
};
export default Person;
