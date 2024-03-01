import React from 'react'
import dinein from '../../dates/imgs/dinein.png';
import walkin from '../../dates/imgs/walkin.png';
import logo from '../../dates/imgs/logo.png';

const Navbar = () => {
  return (
    <div className='z-50 fixed left-0 right-0 top-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between gap-5 inline-flex'>
        <div className="flex gap-6 items-center">
            <div className="border-r pr-6 border-[#e4e4e4">
                <img src={logo} alt='Logo' />
            </div>
            <div className='text-xl font-semibold leading-8 text-[#19191c]'>
                Dashboard
            </div>
        </div>
    </div>
  )
}

export default Navbar