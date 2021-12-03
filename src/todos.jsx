import React from 'react'
import { ACTION } from './App'

export default function Todo({todo,dispatch}) {
    return (
        <div>
            <span style={{color: todo.completed ? 'red' : '#AAA'}}>
            {todo.name}
            </span>
            <button onClick={()=>
                dispatch(
                    {
                    type:ACTION.TOGGLE, payload: {id: todo.id
                    }})
            }>Toggle</button>
            <button onClick={()=>{
                dispatch({
                    type:ACTION.DELETE,
                    payload:{id: todo.id}
                })
            }}>Delete</button>
        </div>
    )
}
