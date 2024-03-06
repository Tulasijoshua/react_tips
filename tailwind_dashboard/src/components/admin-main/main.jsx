import React from 'react'
import Options from '../options/options'
import Cards from '../admin-sale-cards/cards'

const Main = () => {
  return (
    <div className='p-6 mb-6 bg-slate-50 min-h-screen'>
      <div><Options /></div>
      <div><Cards /></div>
      <div className='flex gap-4 flex-wrap'>
        <div className='p-6 w-full my-4 lg:w-[60%] bg-white rounded-xl'>
          <div className='text-zinc-900 font-medium leading-normal mb-8'>
            Selected Location
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main