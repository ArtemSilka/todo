import ToDoComponent from "./components/ToDoComponent";

function App() {
  return (
    <div className="App">

      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add todos..."/>
          <div className="add">Add</div>
        </div>

        <div className="list">

          <ToDoComponent text="Test" />

        </div>
      </div>

    </div>
  );
}

export default App;