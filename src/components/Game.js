import gameArt from '../css/gameArt.css'

const Game = () => {
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
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                </div>
                <div>
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                </div>
                <div>
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                    <div className='boardGame'/>
                </div>
            </div>
        </div>
    )
}

export default Game;