import buttonArt from '../css/buttonArt.css'

const Button = (props) => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <button className='button'
            style={{
                color:props.textColor,
                backgroundColor:props.backColor,
            }}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button;