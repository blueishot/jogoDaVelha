import muralArt from '../css/muralArt.css'
import Menu from '../components/Menu.js'
import Game from '../components/Game.js'
import Moves from '../components/Moves.js'

const Mural = () => {
    return (
        <div className='painelGame'>
            <Menu/>
            <Game/>
            <Moves/>
        </div>
    )
}

export default Mural;