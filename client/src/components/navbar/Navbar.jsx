import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled]=useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.scrollY === 0?false:true);
        //Clean up function, otherwise it will loop??
        return ()=> (window.onscroll = null);
    }
    console.log(isScrolled)
  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
        <div className='container'>
            <div className='left'>
                <img src='../../logo/ShortV.png' alt='logo'/>
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
               <Search className='icon'/>
               <span>KID</span>
               <Notifications className='icon'/>
               <img src='../../logo/monster-red.png' alt='logo'/>
               <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
               </div>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar