import './App.css';
import Header from './MyComponents/Header';
import { useState } from 'react'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("array") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("array"));
  }

  const onDelete = (eachObject) => {
    setArray(array.filter((e) => {
      return e !== eachObject;
    }));
  };

  const [array, setArray] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array));
  }, [array]);

  const addTodo = (title, description) => {
    let sno;
    if (array.length === 0) {
      sno = 1;
    }
    else {
      sno = array[array.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setArray([...array, newTodo]);
  }

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path='/' element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos array={array} onDelete={onDelete} />
            </>
          }/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
