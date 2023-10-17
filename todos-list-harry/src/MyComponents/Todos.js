import React from 'react'
import TodoItem from './TodoItem'

export default function Todos({array, onDelete}) {
  return (
    <>
      <div className="container" style={{minHeight: "39vh"}}>
        <h2 className='my-3'>Todos List</h2>
        {array.length !== 0? array.map((eachObject)=>{
            return <TodoItem eachObject={eachObject} key={eachObject.sno} onDelete={onDelete}/>
        }): <h4>Oops! No Todos To Display.</h4>}
      </div>
    </>
  )
}
