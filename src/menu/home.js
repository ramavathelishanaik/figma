import React from "react";
import {Link} from 'react-router-dom'
import './home.css'
import ReactSlick from "../components/slider/slider";
import { FaSearch, FaFilter } from 'react-icons/fa';


const Home=()=>{
    return(
        <div className="main-page">
            <nav className="navbar">
            <ul>
                <Link to="/movies"><li>Movies</li></Link>
                <Link to="/tv"><li>Tv Shows</li></Link>
                <Link to="/anime"><li>Anime</li></Link>
                <li className="inputfield">
                        <span><FaSearch/></span>
                        <input type='input'placeholder=" Searh"/>
                        <span><FaFilter/></span>
                </li>
            </ul>
            </nav>
            <ReactSlick/>

            <h1 className='tinymovies'>Popular on tinyMovies</h1>
            
        </div>
        
    )
}
export default Home