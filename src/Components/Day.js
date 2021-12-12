import React from 'react'
import Button from './Button'
import Exercises from './Exercises'
import { useState } from 'react'
import AddExercise from './AddExercise'

const Day = ({ dow, onDelete }) => {
    const [exercises, setExercise] = useState([
        {
            id: 1,
            name: 'Row',
            setsReps: '5x5'
        },
        {
            id: 2,
            name: 'Bench',
            setsReps: '5x5'
        }

    ])

    const addExercise = (exercise) => {
        const id = Math.floor(Math.random() * 10000 ) + 1
        const newExercise = {id, ...exercise}
        setExercise([...exercises, newExercise])
        console.log(exercise)
    }

    const deleteExercise = (id) => {
        setExercise(exercises.filter((exercise) => exercise.id !==id))
    }

    return (
        <div>
            <Button />
            <div style={
                {border: '2px solid black',
                width: '200px',
                height: '700px'
                }
                
        }>{dow}<AddExercise onAdd={addExercise}/>{exercises.length > 0 ? <Exercises exercises={exercises} onDelete={deleteExercise} /> : ' Rest Day!'} </div>
        </div>
    )
}

export default Day
