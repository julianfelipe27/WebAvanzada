import React from 'react';
import ElementInfo from './components/elementInfo'
import location from './img/location.png'
import phone from './img/phone.png'
import mail from './img/mail.png'
import './styles.css'

const Information = () => {
    return (
        <div className='informationContainer'>
            <ElementInfo icon={location} text='Seattle (WA), USA' color='white'/>
            <ElementInfo icon={phone} text='12 98123-4567' color='white'/>
            <ElementInfo icon={mail} text='david.grohl@gmail.com'color='white'/>
        </div>
    );
};

export default Information;