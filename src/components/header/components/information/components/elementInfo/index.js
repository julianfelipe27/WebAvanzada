import React from 'react';
import './styles.css'

const ElementInfo = ({icon, text, color}) => {
    return (
        <div className='elementInfoContainer'>
            <img className='cion'src={icon} alt='ubication'></img>
            <p className={color}>{text}</p>
        </div>
    );
};

export default ElementInfo;