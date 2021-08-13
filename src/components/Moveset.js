import movesetArt from '../css/movesetArt.css'

const Moveset = (props) => {
    return (
        <div className='movesetBody'>
            <div
            style={{
                marginRight:'16px'
            }}
            >
                <span
                style={{
                    color:'#828282',
                    fontSize:'48px',
                    fontWeight:'bold',
                }}
                >
                    {props.type}
                </span>
            </div>
            <div>
                <div>
                    <span
                    style={{
                        color:'#828282',
                        fontSize:'14px',
                        fontWeight:'bold',
                    }}
                    >
                        {props.player}
                    </span>
                </div>
                <div>
                    <span
                    style={{
                        color:'#0097E6',
                        fontSize:'14px',
                    }}
                    >
                        {props.location}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Moveset;