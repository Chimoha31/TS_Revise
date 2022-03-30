import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // Appないで使う型を先に定義しておくと余計なエラーが出なくて楽。
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    // ↑元のtodosに対して、newTodosがどんどん入っていく
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChecked = (id:number, checked:boolean) => {
    
  }

  return (
    <div className="App">
      <div>
        <h2>Todo List with Typescript</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            className="inputText"
          />
          <input type="submit" value="Create" className="submitButton" />
        </form>

        {/* inputに入力したtodoをuiに反映させる */}
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => {handleEdit(todo.id, e.target.value)}}
                className="inputText"
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={(e) => {handleChecked(todo.id, todo.checked)}}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
