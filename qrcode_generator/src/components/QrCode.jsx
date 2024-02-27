import React from 'react'
import QRCode from '../assets/qr_code.svg'

const QrCode = () => {
  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
        <div>
            <img src={QRCode} alt="" />
            <button>Download</button>
        </div>
    </div>
  )
}

export default QrCode