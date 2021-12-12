import React from 'react'
import { useState } from 'react'

const AddExercise = ({onAdd}) => {

    const[text, setText] = useState('')
    const[reps, setReps] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Add an exercise')
            return
        }

        onAdd({ text, reps})
        setText('')
        setReps('')
    }
    return (
        <form className='add' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>exercise</label>
                <input type='text' placeholder='Add Exercise' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Sets and Reps</label>
                <input type='text' placeholder='Add sets x reps' value={reps} onChange={(e) => setReps(e.target.value)} />
            </div>
            <input type='submit' value='Save Exercise' />
        </form>
    )
}

export default AddExercise
