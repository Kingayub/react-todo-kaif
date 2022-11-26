
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form'
import Todos from './components/Todos'
import './styles.css';

function App() {

  const defaultTodos = [
    {
      text: "Bay bananas",
      favorite: false,
    },
    {
      text: "Sell home",
      favorite: false,
    },
    {
      text: "Complete javascript lessons",
      favorite: false,
    }
  ];
  const [todos, setTodos] = useState(defaultTodos)
  const [text, setText] = useState("")

  const removeTodo = (i) => {
    const filtered = todos.filter((el, index) => {
      if (index !== i) {
        return el
      }
    })
    setTodos(filtered)
  }

  const makeFavorite = (i) => {
    const newTodos = todos.map((el, index) => {
      if (i === index) {
        return {
          ...el,
          favorite: !el.favorite
        }
      }
      return el
    })
    setTodos(newTodos)
  }

  const addTodo = () => {
    const checkRepeatTodo = todos.every((el) => el.text !== text)
    checkRepeatTodo && text.trim() !== "" &&
      setTodos([{
        text: text,
        favorite: false
      },
      ...todos],
      )
    setText("")
  }

  return (
    <div className="container">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos todos={todos} makeFavorite={makeFavorite} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
