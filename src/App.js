import React, { useState } from "react";
import "./styles.css";
import ClearIcon from '@mui/icons-material/Clear';

const App = () => <TodoApp />;
const TodoApp = () => {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);
  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };
  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };
  return (
    <div id="app">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br /> {/* Why */}
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
};
const TodoHeader = () => (
  <div id="header">
    <h2>Todo List</h2>
  </div>
);
const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };
  return (
    <div id="form">
      <input
        id="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};
const TodoList = ({ messageList, deleteTodo }) => (
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);
const Todo = ({ message, deleteTodo }) => {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);
  const handleSubmit = (event) => {
    deleteTodo(message);
  };
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  var isChecked = (message) =>
    messageList.includes(message) ? "checked-item" : "not-checked-item";
  return (
    <li id="todo">
      <input value={message} type="checkbox" onChange={handleCheck} />
      <span className={isChecked(message)}>{message}</span>
      <ClearIcon id="todo__delete" onClick={handleSubmit}>

      </ClearIcon>
    </li>
  );
};



export default App;
