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

export { getAllToDos };