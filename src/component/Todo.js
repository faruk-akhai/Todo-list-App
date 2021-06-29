import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/index";
import "./todo.css";
const Todo = () => {

    const [inputdata, setinputdata] = useState('');
    const list = useSelector((state) => state.todoreducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add Your List here 🤞</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items.. " className="in"
                            value={inputdata}
                            onChange={(event) => setinputdata(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputdata), setinputdata(''))}></i>
                    </div>
                    <div>
                        {list.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                <div className="todo-btn">
                                    <i className="far fa-trash-alt add-btn1" title="Delete-Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    <h3>{elem.data}</h3>

                                </div>
                                </div>
                            )
                        })
                        }



                    </div>
                    <div>
                   
                        <button class="todo-btn1" onClick={()=> dispatch(removeTodo())}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
