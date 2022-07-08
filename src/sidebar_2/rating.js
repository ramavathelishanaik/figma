import React from "react";
import {
    FaPlus
} from 'react-icons/fa'
import './rating.css'


const Rating=()=>{
    return(
        <div className="rat-container">
            <h1 className="rat-heading">Top Rated </h1>
            <div className="rat-card">
                <div>
                     <h1 className="head">Supernatural</h1>
                     <div className="span1">
                        <p className="para">320 Ep</p>
                        <p className="para">Horror, Friction</p>
                     </div>
    
                </div>
                <div className="dis2">
                    <button className="btn1"><FaPlus /></button>
                    <button className="btn2">Watch</button>
                </div>
               
            </div>
        </div>
    )
}
export default Rating