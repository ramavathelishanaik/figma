import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'

import img1 from "../images/c1.jpg"
import img2 from "../images/c2.jpg"

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div>
            
            <img src={img1} alt="rrr" className='crown'/>
        </div>
        <div>
            <img src={img2} alt="rrr" className='crown'/>
        </div>
        
      </Slider>
    </div>
  )
}

export default ReactSlick