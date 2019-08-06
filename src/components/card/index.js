import React, {Component} from 'react';
import xperience from './img/xperience.jpg'
import './styles.css'

class Card extends Component{   

    constructor(props){
    super(props)
        this.state={
            title:props.title,
            text:props.text,
            class:props.class
        }
    }
    showHideImg=()=>{
        if(this.imageContent.style.display==='flex'){
            this.imageContent.style.display='none'
        }
        else{
            this.imageContent.style.display='flex'
            console.log('entra')
        }
    }
    render(){
    return (
        <div className={`cardContainer ${this.state.class}`} onClick={(this.state.class?this.showHideImg:null)}>
            <p className='title'>{this.state.title}</p>
            <p className='text'>{this.state.text}</p>
            <div ref={element=>this.imageContent=element}
            id='imgContent'className='imgContent'>
            <img src={(this.state.class?xperience:null)} alt=''></img>
            </div>
        </div>

    )
    }
}

export default Card;