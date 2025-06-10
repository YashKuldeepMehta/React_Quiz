
const ScoreCard = ({score,total})=>{

    return (
        <>
        <h2>Quiz Completed!!</h2>
        <h3>Your score : <b>{score} / {total}</b></h3>
        </>
    )
}

export default ScoreCard