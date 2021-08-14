import { useState } from 'react';
import gameArt from '../css/gameArt.css'

const Game = () => {
   
    const [choice, setChoice] = useState('')

    let currentMove = 'X'

    const moveTurn = () => {
        if (currentMove == 'O') {
            currentMove = 'X'
        } else {
            currentMove = 'O'
        }
    }
   
    return (
        <div className='middlePainel'>
            <div className='scorePainel'>
                 <div>
                    <span 
                    style={{
                        color:'#0097E6',
                        fontSize:'24px',
                        fontWeight:'bold',
                    }}
                    >
                        Placar
                    </span>
                </div>
                <div className='scores'>
                    <div  className='playerScore'>
                        01
                    </div>
                    <div>
                        <span
                        style={{
                            fontSize:'16px',
                            fontWeight:'500',
                            color:'#828282'
                        }}>
                            Jogador 1
                        </span>
                    </div>
                    <div className='playerScore'>
                        01
                    </div>
                </div>
            </div>
            <div className='ticTacToeBoard'>
                <div>
                    <div className='boardGame' onClick={(moveTurn) => setChoice (currentMove)}>
                        {choice}    
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                </div>
                <div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                </div>
                <div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                    <div className='boardGame' onClick={() => setChoice (currentMove)}>
                        {choice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;