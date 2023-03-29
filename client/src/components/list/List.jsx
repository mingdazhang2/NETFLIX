import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./list.scss"
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved]= useState(false);
    const listRef = useRef()  
    const handleClick =(driection)=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x-50
        if(driection === 'left'&& slideNumber > 0){
            setSlideNumber(slideNumber -1)
            listRef.current.style.transform = `translateX(${230+distance}px)`
            
        }
        if(driection === 'right'&& slideNumber < 5){
            setSlideNumber(slideNumber +1)
            listRef.current.style.transform = `translateX(${-230+distance}px)`
            
        }
        console.log("xxx",distance)
    }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined className='sliderArrow left' 
            onClick={()=>handleClick('left')}
            style={{display: !isMoved &&'none'}}/>
            <div className='container' ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>

            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick('right')}/>
        </div>
    </div>
  )
}

export default List