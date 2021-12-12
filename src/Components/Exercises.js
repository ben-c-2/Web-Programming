import React from 'react'
import Exercise from './Exercise'


const Exercises = ({exercises, onDelete}) => {
    
    return (
        
        <>
        {
            exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} 
                onDelete={onDelete} />

            ))}
        </>
    )
}

export default Exercises
