

const Instruction = ( {score, highScore} ) => {

    return (
        <>
            <h1>
                Gotta Click 'Em All!
            </h1>
            <h3>
                How to play: Click on all 16 Pokemon cards to win - but be careful! 
                The cards will change position each time you select one.
            </h3>
            <h4>Score: {score} </h4>
            <h5>High Score: {highScore}</h5>
        </>
    )

}



export default Instruction