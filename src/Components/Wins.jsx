const WinningLogic = (props) => {
    const { userSelection, computerSelection, userPoints, computerPoints } =
        props;

    if (
        (userSelection === "Rock" && computerSelection === "Rock") ||
        (userSelection === "Paper" && computerSelection === "Paper") ||
        (userSelection === "Scissor" && computerSelection === "Scissor")
    ) {
        return "Its a tie";
    } else if (userPoints === 10) {
        return "You Won";
    } else if (computerPoints === 10) {
        return "computer Won";
    } else if (userSelection === "Rock" && computerSelection === "Paper") {
        return "computer wins";
    } else if (userSelection === "Paper" && computerSelection === "Rock") {
        return "user wins";
    } else if (userSelection === "Paper" && computerSelection === "Scissor") {
        return "computer wins";
    } else if (userSelection === "Scissor" && computerSelection === "Paper") {
        return "user wins";
    } else if (userSelection === "Rock" && computerSelection === "Scissor") {
        return "user wins";
    } else if (userSelection === "Scissor" && computerSelection === "Rock") {
        return "computer wins";
    } else {
        return "vs";
    }
};

export default WinningLogic;
