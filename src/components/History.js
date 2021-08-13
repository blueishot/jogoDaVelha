import historyArt from '../css/historyArt.css'

const History = (props) => {
    return (
        <div className='historyMatch'
        style={{
            marginBottom:props.bottomSpace
        }}
        >
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
                    fontSize:'14px',
                    userSelect:'none'
                }}
                >
                    Cenário
                </span>
            </div>
            <div className='historyBlocks'>
                <div>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                </div>
                <div>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                </div>
                <div>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                    <div className='blockGame'/>
                </div>
            </div>
        </div>
    )
}

export default History;