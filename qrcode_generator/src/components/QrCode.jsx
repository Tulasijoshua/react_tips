import React, { useContext } from 'react'
import QRCode from '../assets/qr_code.svg'
import { InputContext } from '../App';

const QrCode = () => {
  const {response, loading, error} = useContext(InputContext);
  console.log(response)

  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
        <div>
            <img className='w-48' src={QRCode} alt="" />
            <button
                className='bg-blue-400 text-white mt-2 px-4 py-1 w-full'
            >Download</button>
        </div>
    </div>
  )
}

export default QrCode