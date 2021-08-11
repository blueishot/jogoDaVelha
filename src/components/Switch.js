import { useState } from 'react';
import switchArt from '../css/switchArt.css'


const Switch = () => {

    const [changeBall, setChangeBall] = useState(false);

    const changeSwitch = () =>{
    changeBall ? setChangeBall(false) : setChangeBall(true);
}


    return (
        <div className='switchBody'>
            <div className={changeBall ? 'switchWidthLeft' : 'switchWidthRight'}>
                <div className='switchBall' onClick={changeSwitch} />
            </div>
        </div>
    )
}

export default Switch;
