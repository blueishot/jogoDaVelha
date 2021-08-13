import movesArt from '../css/movesArt.css'
import Moveset from  '../components/Moveset.js'

const Moves = () => {
    return (
        <div className='movesBody'>
            <div
            style={{
                marginTop:'20px',
                marginBottom:'28px',
                
            }}
            >
                <span
                style={{
                    color:'#FFFFFF',
                    fontSize:'16px',
                    fontWeight:'bold'
                }}
                >
                    Histórico de Jogadas
                </span>
            </div>
            <div>
                <Moveset
                type={"X"}
                player={"Jogador 1"}
                location={"Primeiro Quadrado"}
                />
                <Moveset
                type={"O"}
                player={"Jogador 2"}
                location={"Segundo Quadrado"}
                />
                <Moveset
                type={"X"}
                player={"Jogador 1"}
                location={"Terceiro Quadrado"}
                />
                <Moveset
                type={"O"}
                player={"Jogador 2"}
                location={"Quarto Quadrado"}
                />
            </div>
        </div>
    )
}

export default Moves;