import React from 'react';
import Header from './components/header'
import ElementInfo from './components/header/components/information/components/elementInfo'
import Title from './components/title'
import Card from './components/card'

import graduationCap from './img/graduationCap.png'
import user from './img/user.png'
import hearth from './img/hearth.png'
import suitcase from './img/suitcase.png'
import pencil from './img/pencil.png'
import translate from './img/translate.png'
import earth from './img/earth.png'
import star from './img/star.png'
import laptop from './img/laptop.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='header'>
      < Header />
      </section>
      <section className='body'>
      <div className='description'>
      <ElementInfo icon={user} text='Proactive and responsible. More than 5 years experience in web development.
      Member in open source communites such as GitHub ' color='black'/>
      </div>
      <div className='xperienceContainer'>
        <div className='academicContent'>
          <div>
            <Title icon={graduationCap} text='EDUCATION' />
            <div className='infoContent'>
            <p className='subTitle'>University "Foo Fighter's" (UNIFF), Seattle (WA), USA</p>
            <p className='text'>Master's Degree in Computer Science - 2015</p>
            </div>
            <div className='infoContent'>
            <p className='subTitle'>University "Foo Fighter's" (UNIFF), Seattle (WA), USA</p>
            <p className='text'>Bachelor's Degree in Computer Science - 2012</p>
            </div>
            <Title icon={pencil} text='COURSES & CERTIFICATES' />
            <p> <span className='subTitle'>TOEFL </span>: 2016</p>
            <p> <span className='subTitle'>Systems for Internet </span>; Training Center Computer Vision: 2013</p>
            <p> <span className='subTitle'>UX Designer </span>; Alura: 2017</p>
            <Title icon={hearth} text='VOLUNTEER WORKS' />
            <div className='infoContent'>
            <p className='subTitle'>Volunteer on St. Mary's Hospital</p>
            <p className='text'>Stocked nursery and children's ward with supplies</p>
            </div>
            <div className='infoContent'>
            <p className='subTitle'>Volunteer Teacher on Lorem's School</p>
            <p className='text'>Basic programming classes for teenagers</p>
            </div>
          </div>
        </div>
        <div className='professionalContent'>
        <div>
        <Title icon={suitcase} text='COURSES & CERTIFICATES' />
        </div>
        <div className='infoContent'>
        <p className='subTitle'>Foo Fighters S.A.</p>
        <p className='subTitle'>Front-end Developer</p>
        <p className='text'>A million miles away your signal in the distance to whom it may concern</p>
        <p className='foot'>October 1994 - present</p>
        </div>
         <div className='infoContent'>
        <p className='subTitle'>Nirvana LTDA</p>
        <p className='subTitle'>Full-stack Web Developer</p>
        <p className='text'>I've got another confession to make I'm your fool. Everyone's got their
        chains to break holding you. Were you born to resist or be abused</p>
        <p className='foot'>November 1897 - April 1994</p>
        </div>
        <div className='infoContent'>
        <p className='subTitle'>Garage Band</p>
        <p className='subTitle'>Assist Development Intern</p>
        <p className='text'>This indecision got me climbing up the wall I've been changing cheating gravity and waiting on the fall</p>
        <p className='foot'>January 1981 - December 1990</p>
        </div>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='infoContent'>
        <Title icon={translate} text='LANGUAGES'/>
        <p> <span className='subTitle'>English:</span> Native</p>
        <p> <span className='subTitle'>Italian:</span> Intermediate</p>
        </div>
        <div className='infoContent'>
        <Title icon={earth} text='ON WEB'/>
        <p>linkedin.com/in/david-grohl</p>
        <p>behance.net/davidgrohl</p>
        </div>
        <div  className='infoContent'>
        <Title icon={star} text='INFORMATIONS'/>
        <p>Disponibility for travels Rotaract Club Member</p>
        </div>
      </div>
      <div className='skills'>
      <Title icon={laptop} text='TECHNICAL SKILLS'/>
      <div className='infoContent'>
      <Card class='showable' title='Front-end' text='HTML 5, CSS, SASS, JS/ES6, jQuery, Vuejs, TypeScript'/>
      <Card class='showable'title='Backend-end' text='Nodejs, C#, PHP'/>
      <Card title='Frameworks' text='Boopstrap, Foundation, Material Design Lite'/>
      <Card title='Wireframes and Proptypes' text='Axure, Adobe XD, Sketch'/>
      <Card title='Platforms' text='Wordpress, OpenCart'/>
      <Card title='Vector (icons)' text='Inkscape, Illustrator'/>
      <Card title='Automation tools' text='Gulp, Grunt'/>
      <Card title='Others' text='Git, Hotjar, Responsive design (mobile-first), basic SEO, Agile methodologies, Vagrant'/>
      </div>
      </div>
      </section>
    </div>
  );
}

export default App;
