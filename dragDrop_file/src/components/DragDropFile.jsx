import React, { useState } from 'react'

const DragDropFile = () => {
    const [files, setFiles] = useState();

    const handleDragOver = (e) => {
        e.preventDefault();
        console.log(e)

    }
    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files)
    }
  return (
    <div>
        {!files && (
            <div 
                className='dropzone'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <h1>Drag and Drop files to Upload</h1>
                <h1>Or</h1>
                <input 
                    type="file" 
                    multiple
                    onChange={e => setFiles(e.target.value)}
                    hidden
                    ref={}
                />
                <button>Select Files</button>
            </div>
        )}
    </div>
  )
}

export default DragDropFile