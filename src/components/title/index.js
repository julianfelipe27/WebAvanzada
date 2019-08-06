import React from 'react';
import './styles.css'

const Title = ({icon,text}) => {
    return (
        <div className='titleContainer'>
            <img className='icon' src={icon} alt='icon'></img>
            <h3>{text}</h3>
        </div>
    );
};

export default Title;