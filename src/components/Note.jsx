import React from 'react'


const Note = ({id,text,editHandler,deleteHandler,darkMode}) => {
  
  return (
    
    // <div className={`${darkMode && 'dark-mode'}`}></div>
    <div className={darkMode?'note':'nute'}>
      <div className='note-body'>
        {text}
      </div>
      
      <div className='note_footer' style={{justifyContent:"flex-end"}}>
        {/* <small>{date}</small> */}
        <button className='save' onClick={()=>deleteHandler(id)} >Delete</button>
        <button className='save' onClick={()=>editHandler(id,text)}  >Edit</button>

      </div>
    </div>
  )
}

export default Note
