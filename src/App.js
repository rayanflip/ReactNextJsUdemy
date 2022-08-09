import Todo from "./components/Todo";
import "./styles.css";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="todo 1" />
      <Todo />
      <Todo />
    </div>
  );
}
export default App;
