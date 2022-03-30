import React,{ useState} from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
// Appないで使う型を先に定義しておくと余計なエラーが出なくて楽。
type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // 新しいTodoを作成
  const newTodo: Todo = {
    inputValue: inputValue,
    id: todos.length,
    checked: false,
  }
  setTodos([newTodo, ...todos]);
  // ↑元のtodosに対して、newTodosがどんどん入っていく
}

  return (
    <div className="App">
      <div>
        <h2>Todo List with Typescript</h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" onChange={(e) => {handleChange(e)}} className="inputText"></input>
          <input type="submit" value="Create" className="submitButton"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
