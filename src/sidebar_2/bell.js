import React from "react";
import './bell.css'
import {
    FaBell
} from "react-icons/fa"

const Bell=()=>{
    return(
        <div className="bell-container">
            <div className="bell-icon">
                <FaBell />
            </div>
            <h1 className="bell-heading">Samanth</h1>
        </div>
    )
}
export default Bell