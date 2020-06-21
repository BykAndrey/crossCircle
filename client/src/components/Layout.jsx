import React from 'react';
import Area from './Area';
import { useState } from 'react';

export default props => {
    const [ score, setScore ]= useState({
        circle: 0,
        cross: 0
    }); 
    const [ areaKey, setAreaKey ]  = useState('1');

    const onWin = (whoWin) => {
        console.log('onWin')
        setScore({
            ...score,
            [whoWin]: score[whoWin]+ 1
        })
    }
    const onEnd = () => {setAreaKey((Math.random() * 10).toString());}
    const onReset = () => {setAreaKey((Math.random() * 10).toString());}

    return (<div >
        <div>Cross: {score.cross} Circle: {score.circle}</div>
        <button onClick={onReset}>Reset</button>
        <Area 
            key={areaKey}
            onWin={onWin}
            onEnd={onEnd}/>
    </div>)
}