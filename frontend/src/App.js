import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDos } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo ] = useState([]);

  useEffect(() => {
    getAllToDos(setToDo)
  }, [])

  return (
    <div className="App">

      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add todos..."/>
          <div className="add">Add</div>
        </div>

        <div className="list">

          {toDo.map((item) => <ToDo key = { item._id } text = { item.text } />)}

        </div>
      </div>

    </div>
  );
}

export default App;