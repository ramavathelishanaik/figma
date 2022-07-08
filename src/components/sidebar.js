import {NavLink} from 'react-router-dom'
import './sidebar.css'
import React from "react";
import { FaAward, FaCcDiscover, FaDownload, FaDraftingCompass, FaHome, FaPersonBooth, FaRegComments } from 'react-icons/fa';
import Bell from '../sidebar_2/bell';
import Continue from '../sidebar_2/continue';
import Rating from '../sidebar_2/rating';


const manu=[
    {
        path: '/home',
        name: 'Home',
        icon: <FaHome />
    },
    {
        path: '/discover',
        name: 'Discover',
        icon: <FaCcDiscover />
    },
    {
        path: '/awards',
        name: 'Awards',
        icon: <FaAward />
    },
    {
        path: '/celebrity',
        name: 'Celebrity',
        icon: <FaPersonBooth />
    }

]

const library=[
    {
        path: '/recent',
        name: 'Recents',
        icon: <FaRegComments />
    },
    {
        path: '/rated',
        name: 'Rated',
        icon: <FaDraftingCompass />
    },
    {
        path: '/downloads',
        name: 'downloads',
        icon: <FaDownload />
    },
]

const Sidebar=({children})=>{
    return (
        <div className="container">
            <div className="sidebar">
                <h1 className='main-heading'>Dashboard</h1>
                <div className="top-section">
                <fieldset className='fieldset'>
                    <legend className="menu">menu</legend>
                        {                          
                            manu.map((items,index)=>(
                                
                                <NavLink to={items.path} key={index} className="link" activeclassName='active'>
                                    <div className='icon'>{items.icon}</div>
                                    <div className='link_text'>{items.name}</div>
                                </NavLink>
                                 
                            ))
                           
                        }
                    </fieldset>                   
                </div>

                <div className="bottom-section">
                <fieldset className='fieldset'>
                    <legend className="library">Library</legend>
                        {
                            library.map((items,index)=>(
                                <NavLink to={items.path} key={index} className="link" activeclassName='active'>
                                    <div className='icon'>{items.icon}</div>
                                    <div className='link_text'>{items.name}</div>
                                </NavLink>
                            ))
                        }
                    </fieldset>                   
                </div>
            </div>

            <main >{children}</main>

            <div className="sidebar">
                <div className='sidebar_2'>
                    <Bell />
                    <Continue />
                    <Rating />
                </div>
            </div>    
        </div>
    )
}
export default Sidebar