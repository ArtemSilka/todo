import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAllToDos = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data...', data);
            setToDo(data);
        })
}

const addToDo = (text, setText, setToDo ) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data)
            setText("")
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllToDos, addToDo, updateToDo };