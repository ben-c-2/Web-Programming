import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Exercise = ({ exercise, onDelete }) => {
    return (
        <div className='exercise'>
        <h4>
            {exercise.name} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(exercise.id)}/>
        </h4>
        <p>{exercise.setsReps}</p>
        </div>
    )
}

export default Exercise
