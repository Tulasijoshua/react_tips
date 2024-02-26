import React, { useState } from 'react'

const InputColor = () => {
    const [color, setColor] = useState('#054080')
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
  return (
    <div>
        <label 
            className='font-semibold text-md'
        >Color</label>
        <div className='flex items-center gap-2'>
            <div 
            onClick={() => setDisplayColorPicker(!displayColorPicker)}
            style={{ background: color}}
            className='w-10 h-8 cursor-pointer border-4'></div>
            <span>{color}</span>
        </div>
        {
            displayColorPicker && 'ShowcolorPicker'
        }
    </div>
  )
}

export default InputColor