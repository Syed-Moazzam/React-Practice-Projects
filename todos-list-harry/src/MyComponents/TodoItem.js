import React from 'react'

export default function TodoItem({eachObject, onDelete}) {
  return (
    <div>
        <h2>{eachObject.title}</h2>
        <p>{eachObject.description}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(eachObject)}}>Delete</button>
        <hr/>
    </div>
  )
}
