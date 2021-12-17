import React, { useState , useEffect} from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [list, setList] = useState('all')
  const [editTodo , setEditTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!editTodo){
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
      setToDo('')
    }else{
      console.log("The edit : ",editTodo)
      updateTodo(toDo , editTodo.id ,editTodo.status)
    }
   
  }

  const updateTodo = (text , id , status)=>{
    console.log(text , id , status)
    const newTodo = toDos.map((obj)=>
      obj.id === id ? {text , id , status} : obj
    )
    setToDos(newTodo)
    setEditTodo(null)
  }

 

  
const handleEdit = ({id})=>{
  const findTodo = toDos.find((eachTodo)=>eachTodo.id === id)

  setEditTodo(findTodo)
}

useEffect(()=>{
  if(editTodo){
    setToDo(editTodo.text)
  }else{
    setToDo("")
  }
},[setToDo,editTodo])
  return (
    <body>
      <header><h1> To do list </h1></header>
      <section className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit} id="create-course-form" >
           <input id='inp' value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" className="todo-input"
              placeholder="type something here" /> 

           
            <button className="todo-button" >
              <i className="fas fa-plus-circle"></i>
            </button>
          </form>
          <div className="select">
            <select value={list} onChange={(event) => setList(event.target.value)} className="filter-todos" name="todos">
              <option className="all"> all </option>
              <option
                className="completed"> completed </option>
              <option className="unCompleted"> unCompleted </option>
            </select>
          </div>
        </div>
        <br />
        {
          toDos.map((value) => {

            const condition = value.status

            if (list === "all") {

              return (
                <div className="todo-container">
                  <ul className="todoList">
                    <div className="todo">
                      <li style={condition ? { color: "red", textDecorationLine: "line-through", opacity: .3 } : null} >{value.text}</li>
                      <span><i onClick={()=>{
                        handleEdit(value)
                      }} className="fas fa-pencil-alt"></i></span>


                      <span>
                        <i onClick={() => setToDos(toDos.filter(filter_value => {
                          if (filter_value.id !== value.id) {

                            return filter_value

                          } else {

                            return null
                          }
                        }))} className="far fa-trash-alt" aria-hidden="true"></i>
                      </span>

                      <span>
                        <input onChange={(event) => {

                          setToDos(toDos.filter(filter_value => {
                            if (filter_value.id === value.id) {

                              filter_value.status = event.target.checked

                            }
                            return filter_value
                          }))
                        }} type="checkbox" className="far_checked" aria-hidden="true">

                        </input>
                      </span>

                    </div>
                  </ul>
                </div>
              )
            }

            else if (list === "completed") {

              if (condition === true) {


                return (
                  <div className="todo-container">
                    <ul className="todoList">
                      <div className="todo">

                        <li style={condition ? { color: "red", textDecorationLine: "line-through", opacity: .3 } : null} >{value.text}</li>
                        <span>
                          <i onClick={() => setToDos(toDos.filter(filter_value => {
                            if (filter_value.id !== value.id) {

                              return filter_value

                            } else {

                              return null
                            }
                          }))} className="far fa-trash-alt" aria-hidden="true"></i>
                        </span>
                        <span>
                          <input onChange={(event) => {

                            setToDos(toDos.filter(filter_value => {
                              if (filter_value.id === value.id) {

                                filter_value.status = event.target.checked

                              }
                              return filter_value
                            }))
                          }} type="checkbox" className="far_checked" aria-hidden="true">

                          </input>
                        </span>
                      </div>
                    </ul>
                  </div>
                )

              }
            }
            else {

              if (condition === false) {


                return (
                  <div className="todo-container">
                    <ul className="todoList">
                      <div className="todo">

                        <li style={condition ? { color: "red", textDecorationLine: "line-through", opacity: .3 } : null} >{value.text}</li>
                        <span>
                          <i onClick={() => setToDos(toDos.filter(filter_value => {
                            if (filter_value.id !== value.id) {

                              return filter_value

                            } else {

                              return null
                            }
                          }))} className="far fa-trash-alt" aria-hidden="true"></i>
                        </span>
                        <span>
                          <input onChange={(event) => {

                            setToDos(toDos.filter(filter_value => {
                              if (filter_value.id === value.id) {

                                filter_value.status = event.target.checked

                              }
                              return filter_value
                            }))
                          }} type="checkbox" className="far_checked" aria-hidden="true">

                          </input>
                        </span>
                      </div>
                    </ul>
                  </div>
                )

              }

            }
          })}
      </section>
    </body>

  );
}

export default App;
