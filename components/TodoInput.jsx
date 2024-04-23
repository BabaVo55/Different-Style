import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function TodoInput(props) {

  const {handleAddTodo, newValue, setNewValue} = props
  
  
  return (
    <div className='input-container'>
      <input value={newValue} onChange={(e) => setNewValue(e.target.value)} placeholder='Enter Todos...' />
      <Stack>
        <Button onClick={() => {
          handleAddTodo(newValue)
          setNewValue('')
        }} variant="outlined">Add Todos...</Button>
      </Stack>
    </div>
  )
}
