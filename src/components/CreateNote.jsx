import React from 'react'
const CreateNote = ({inputtext,setInputText,saveHandler}) => {
    const char=100;
    var charLimit=100;
    if(inputtext){
        charLimit=char-inputtext.length;
    }
    
    
  return (
    <div className='note'>
      <textarea cols={10} rows={5} placeholder='Type your text here...' 
      onChange={((e)=>setInputText(e.target.value))}
      value={inputtext}

      maxLength={100}>

      </textarea>
      <div className='note_footer'>
        <span className='label'>{charLimit} remaining</span>
        <button className='note_save' onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default CreateNote
