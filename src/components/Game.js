import { useState } from 'react';
import gameArt from '../css/gameArt.css'
import Square from '../components/Square'

const Game = () => {
   
    const [turn, setTurn] = useState('X')
    const [piece, setPiece] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState ()

    const checkWinner = (squarePiece) => {
        let combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }

    const changePiece = (sqr) => {
        if (piece[sqr] !== '') {
            alert("You can't do this")
            return;
        }

        let squarePiece = [...piece];

        if (turn === 'X') {
            squarePiece[sqr] = 'X';
            setTurn('O');
        } else {
            squarePiece[sqr] = 'O';
            setTurn('X');
        }

        checkWinner (squarePiece);
        setPiece (squarePiece);
    }

    const Square = ({sqr}) => {
        return <div className='boardGame' onClick={() => changePiece(sqr)}>{piece[sqr]}</div>
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
                    <Square sqr={0}/>
                    <Square sqr={1}/>
                    <Square sqr={2}/>

                </div>
                <div>
                    <Square sqr={3}/>
                    <Square sqr={4}/>
                    <Square sqr={5}/>
                </div>
                <div>
                    <Square sqr={6}/>
                    <Square sqr={7}/>
                    <Square sqr={8}/>
                </div>
            </div>
        </div>
    )
}

export default Game;