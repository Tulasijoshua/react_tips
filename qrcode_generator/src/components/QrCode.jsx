import React, { useContext } from 'react'
import QRCode from '../assets/qr_code.svg'
import { InputContext } from '../App';

const QrCode = () => {
  const {response, loading, error} = useContext(InputContext);
  console.log(response)

  if(loading) {
    return (
      <div className='animate-pulse flex flex-col items-center justify-center px-10 gap-3'>
        <div className='h-32 w-full bg-gray-300'></div>
        <div className='h-8 w-full bg-gray-300'></div>
      </div>
    )
  }

  if(error) {
    return <div className='text-gray-500 flex items-center'>Sorry, Something wen wrong</div>
  }

  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
      {response ? (
      <div>
          <img className='w-48' src={response} alt="" />
          <button
              className='bg-blue-400 text-white mt-2 px-4 py-1 w-full'
          >Download</button>
      </div>
      ) : (
        <div className=''>Your QrCode will be showing here...</div>
      )}
        
    </div>
  )
}

export default QrCode