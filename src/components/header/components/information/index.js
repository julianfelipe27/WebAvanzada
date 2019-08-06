import React from 'react';
import ElementInfo from './components/elementInfo'
import location from './img/location.png'
import phone from './img/phone.png'
import mail from './img/mail.png'
import './styles.css'

const Information = () => {
    return (
        <div className='informationContainer'>
            <ElementInfo icon={location} text='Cali (Valle), COLOMBIA' color='white'/>
            <ElementInfo icon={phone} text='57 3177533998' color='white'/>
            <ElementInfo icon={mail} text='juligury@gmail.com'color='white'/>
        </div>
    );
};

export default Information;