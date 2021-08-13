import historyArt from '../css/historyArt.css'

const History = () => {
    return (
        <div className='historyMatch'>
            <div className='winnerBlock'>
                <span
                style={{
                    color:'#45F391',
                    fontSize:'14px',
                    fontWeight:'bold',
                    marginBottom:'5px',
                    userSelect:'none'
                }}
                >
                Vencedor
                </span>
                <span
                style={{
                    color:'#828282',
                    fontSize:'14px',
                    userSelect:'none',
                }}>
                    Primeiro Quadrado
                </span>
            </div>
            <div>
                <span
                style={{
                    color:'#FFFFFF',
                    fontSize:'14px'
                }}
                >
                    Cenário
                </span>
            </div>
        </div>
    )
}

export default History;