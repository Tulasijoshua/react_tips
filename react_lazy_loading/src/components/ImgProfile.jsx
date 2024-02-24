import React, { useState } from 'react'

const ImgProfile = ({ path, placeholder, loadError, ...props }) => {
    const [img, initImg] = useState(placeholder || path);
  return (
    <div>ImgProfile</div>
  )
}

export default ImgProfile