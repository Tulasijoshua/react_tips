import React from 'react'
import Options from '../options/options'
import Cards from '../admin-sale-cards/cards'
import { dateCards } from '../../dates/jummy'

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
          <div className="gap-2 flex flex-wrap">
            {dateCards.map(({text, earn, percent, color}) => {
              return (
                <div className={`grow shrink-0 `}></div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main