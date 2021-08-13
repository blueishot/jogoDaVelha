import muralArt from '../css/muralArt.css'
import Menu from '../components/Menu.js'
import Game from '../components/Game.js'

const Mural = () => {
    return (
        <div className='painelGame'>
            <Menu/>
            <Game/>
        </div>
    )
}

export default Mural;