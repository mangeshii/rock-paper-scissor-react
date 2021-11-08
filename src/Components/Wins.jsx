const WinningLogic=(props)=>{
    const {userSelection,computerSelection}=props

        if (userSelection === "Rock" && computerSelection === "Paper") {
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
            return "Its a tie";
        }

}
export default WinningLogic