import menuArt from '../css/menuArt.css'
import Switch from '../components/Switch.js'
import Button from '../components/Button.js'
import History from '../components/History.js'

const Menu = () => {
    return (
        <div className='menuBody'>
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
            <div className='matchRecord'>
                <div 
                style={{
                    textAlign:'center', 
                    margin:'10px',
                    fontWeight:'bolder',
                    marginTop:'38px',
                    marginBottom:'20px'
                }}
                >
                    <span style={{color:'#FFFFFF'}}>Histórico de Partidas</span>
                </div>
                <History
                 bottomSpace={'20px'} 
                 />
                <History
                 bottomSpace={'98px'}
                />
                <Button
                textColor={'#0097E6'}
                backColor={'#FFFFFF'}
                >
                    Reiniciar
                </Button>
            </div>
        </div>
    )
}

export default Menu;