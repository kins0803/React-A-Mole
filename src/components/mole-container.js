import { useState } from 'react'
import Mole from './mole'
import EmptySlot from './empty-slot'

const MoleContainer = ({setScore, score}) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        setScore(score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer