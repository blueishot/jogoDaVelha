import muralArt from '../css/muralArt.css'
import Switch from '../components/Switch.js'
import Button from '../components/Button.js'

const Mural = () => {
    return (
        <div className='painelGame'>
            <div className='players'>
                <div className='playerName'>
                    <span>Jogador 1</span>
                </div>
                <div className='playerName'>
                    <span>Jogador 2</span>
                    <Switch/>
                </div>
            </div>
            <div className='matchType'>
                <div 
                style={{
                    textAlign:'center', 
                    margin:'10px',
                    fontWeight:'bolder'
                    }}
                    >
                    <span style={{color:' #45F391'}}>Tipo de Partida</span>
                </div>
                <div className='matchsFormat'>
                    <span>Melhor de 3</span>
                    <Switch />
                    <span>Melhor de 5</span>
                </div>
                
            </div>
            <Button
            textColor={'#FFFFFF'}
            backColor={'#45F391'}
            >
                Jogar
            </Button>
        </div>
    )
}

export default Mural;