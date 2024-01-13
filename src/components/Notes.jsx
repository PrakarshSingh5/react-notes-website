import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import Note from './Note'

import {v4 as uuid} from 'uuid'


const Notes = () => {
  const [notes,setNotes]=useState([]);
 const [editToggle, setEditToggle]=useState(null);

 const [inputtext, setInputText]=useState(()=>{
  const saved=localStorage.getItem("Notes");
  const initialVal=JSON.parse(saved);
  const finalVal=initialVal || "";
  setNotes(finalVal);
 });
 
 const editHandler=(id,text)=>{
  setEditToggle(id)
  setInputText(text)
 }
 const saveHandler=()=>{
  if(editToggle){
    setNotes(notes.map((note)=>(
      note.id===editToggle ? 
      {...note,text:inputtext}
      : note
    )))
  } else {
    setNotes((prevNotes)=>[
      ...prevNotes,{
        id:uuid(),
        text:inputtext
      }
    ])
  }
    
    setInputText("")
    setEditToggle(null)

 }
const deleteHandler=(id)=>{
   const newNotes=notes.filter(n=>n.id !== id)
   setNotes(newNotes)
}
 useEffect(()=>{
    window.localStorage.setItem("Notes",JSON.stringify(notes))
 },[notes])
  return (
    <div className='notes'>
      {
        notes.map((note)=>(
          editToggle===note.id ?
<CreateNote inputtext={inputtext} 
      setInputText={setInputText}
      saveHandler={saveHandler}/>

          :
          <Note
          key={note.id}
          id={note.id}
          text={note.text}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          >

          </Note>
        ))
      }
      {
        editToggle === null ? 
        <CreateNote inputtext={inputtext} 
        setInputText={setInputText}
        saveHandler={saveHandler}/>
        : <></>
      }
     
    </div>
  )
}

export default Notes