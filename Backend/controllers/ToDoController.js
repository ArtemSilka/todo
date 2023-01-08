const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

module.exports.saveToDo = async function (req, res) {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Saved Successfully!");
            console.log(data);
            res.send(data);
        });

};