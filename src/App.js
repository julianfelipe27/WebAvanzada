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
      <ElementInfo icon={user} text='Proactive and responsible. More than 3 years experience in web development.
      Member in open source communites such as GitHub' color='black'/>
      </div>
      <div className='xperienceContainer'>
        <div className='academicContent'>
          <div>
            <Title icon={graduationCap} text='EDUCATION' />
            <div className='infoContent'>
            <p className='subTitle'>ICESI University, Cali (Valle), COLOMBIA</p>
            <p className='text'>Professional- 2020</p>
            </div>
            <div className='infoContent'>
            <p className='subTitle'>ICESI University, Cali (Valle), COLOMBIA</p>
            <p className='text'>Master's Degree in Computer Science - 2023</p>
            </div>
            <Title icon={pencil} text='COURSES & CERTIFICATES' />
            <p> <span className='subTitle'>Web Designer </span>: 2018</p>
            <p> <span className='subTitle'>UX Designer </span>: 2019</p>
            <Title icon={hearth} text='VOLUNTEER WORKS' />
            <div className='infoContent'>
            <p className='subTitle'>Volunteer on recreational center Olímpico</p>
            <p className='text'>Taking care of kids between 6 and 12 years old</p>
            </div>
            <div className='infoContent'>
            <p className='subTitle'>Volunteer on Presentation school</p>
            <p className='text'>Basic programming classes for teenagers</p>
            </div>
          </div>
        </div>
        <div className='professionalContent'>
        <div>
        <Title icon={suitcase} text='COURSES & CERTIFICATES' />
        </div>
        <div className='infoContent'>
        <p className='subTitle'>ICESI University</p>
        <p className='subTitle'>Front-end Developer</p>
        <p className='text'>Learning basics web design and the use of different frameworks like
        React, Vuejs, Angular etc.</p>
        <p className='foot'>December 2018 - present</p>
        </div>
         <div className='infoContent'>
        <p className='subTitle'>ICESI University</p>
        <p className='subTitle'>Full-stack Web Developer</p>
        <p className='text'>I've learned some programming languages like Java, Python, C# etc.
        and I was applied them in many projects</p>
        <p className='foot'>August 2016 - Present</p>
        </div>
        <div className='infoContent'>
        <p className='subTitle'>ICESI University</p>
        <p className='subTitle'>Requirements analyst</p>
        <p className='text'>I know how is the process to understand fully a problem, and that is not easy to do, but I've got a lot of experience so
        I can help to you</p>
        <p className='foot'>January 2018 - Present</p>
        </div>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='infoContent'>
        <Title icon={translate} text='LANGUAGES'/>
        <p> <span className='subTitle'>Spanish:</span> Native</p>
        <p> <span className='subTitle'>English:</span> Intermediate</p>
        </div>
        <div className='infoContent'>
        <Title icon={earth} text='ON WEB'/>
        <p>facebook.com/juligury27</p>
        <p>instagram.com/julianfgr</p>
        </div>
        <div  className='infoContent'>
        <Title icon={star} text='INFORMATIONS'/>
        <p>Planing to take scholar practice abroad</p>
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
