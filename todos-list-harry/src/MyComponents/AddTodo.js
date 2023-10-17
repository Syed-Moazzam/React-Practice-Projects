import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title === "" || description === "")
        {
            alert("Title and Description can not be blank.");
        }
        else
        {
            addTodo(title, description);
        }
    }
    return (
        <div className='container'>
            <form className='my-4' onSubmit={submit}>
                <h3>Add a Todo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Decription</label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
