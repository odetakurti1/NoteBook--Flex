import "./App.css";
import InsertNote from "./components/InsertNote/InsertNote";
import DisplayList from "./components/TodoList/DisplayList";

function App() {
  return (
    <div className='flex items-start'>
      <InsertNote />
      <DisplayList />
    </div>
  );
}

export default App;
