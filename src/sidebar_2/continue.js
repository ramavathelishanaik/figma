import React from "react";

import './continue.css'
import img4 from '../components/images/c2.jpg'

const Continue=()=>{
    return(
        <div className="con-container">
            <h1 className="con-heading">Continue </h1>
            <div className="con-card">
                <div className="dis1">
                        <img src={img4} alt="crown" className="img4"/>
                        <div className="con-text">
                            <h1 className="head">WandaVision</h1>
                            <p className="para">1 Episode left</p>
                        </div>
                </div>
                <div className="dis2">
                    <button className="btn1">Drop</button>
                    <button className="btn2">Watch</button>
                </div>
               
            </div>
        </div>
    )
}
export default Continue