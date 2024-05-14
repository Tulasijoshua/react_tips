import React from 'react'
import img1 from '../assets/ongoing/welfare-projects1.jpg';
import img2 from '../assets/ongoing/welfare-projects2.jpg';
import img3 from '../assets/ongoing/welfare-projects3.jpg';
import img4 from '../assets/ongoing/welfare-projects4.jpg';
import img5 from '../assets/ongoing/welfare-projects5.jpg';
import img6 from '../assets/ongoing/welfare-projects6.jpg';
import ImageSlider from '../common/ImageSlider';

const ScratchCarousel = () => {
    const slides = [
        {url : img1, title: 'Beach'},
        {url : img2, title: 'Boat'},
        {url : img3, title: 'Forest'},
        {url : img4, title: 'City'},
        {url : img5, title: 'Italy'},
    ]
    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto',
        
    }
  return (
    <div>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
    </div>
  )
}

export default ScratchCarousel