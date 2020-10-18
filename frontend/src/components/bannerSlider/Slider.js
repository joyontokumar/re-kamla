import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './slider-animations.css'
import './slider.css'

// import images
import img1 from '../../assets/images/slider/1.jpg'
import img2 from '../../assets/images/slider/2.jpg'
import img3 from '../../assets/images/slider/3.jpg'

const content = [
  {
    title: 'Guidline',
    description: 'Invariant E-Health',
    image: img1,
  },
  {
    title: 'E-Health',
    description: 'Invariant E-health',
    image: img2,
  },
  {
    title: 'Health Service',
    description: 'Call Doctor',
    image: img3,
  },
]
const SliderAnimation = () => (
  <Slider
    className="slider-wrapper welcome-area"
    autoplay={2000}
    duration={2000}
    touchDisabled={true}
  >
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner slider-inner-content">
          <h1 className="slider-title">{item.title}</h1>
          <p className="slider-text">{item.description}</p>
        </div>
      </div>
    ))}
  </Slider>
)

export default SliderAnimation
