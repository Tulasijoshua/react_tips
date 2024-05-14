import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        top: '40%'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>🡠</div>
        <div style={rightArrowStyles} onClick={goToNext}>🡢</div>
        <div style={slideStyles}></div>
        <div className='flex justify-center items-center'>
            {slides.map((slide, index) => (
                <div key={index} className='mx-3 text-[20px] text-white cursor-pointer' onClick={() => goToSlide(index)}>⚈</div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider