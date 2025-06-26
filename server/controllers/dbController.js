const Task = require('../models/Task');

async function getTasks(req, res) {
  try{
    const taskslist=await Task.find();
    res.status(200).json(taskslist);
  }catch(error){
    res.status(500).json({error:'failed to get list of tasks from db'});
  }
}

async function addTask(req, res) {
  try{
    const{title,done}=req.body;
    if(!title || typeof title!=='string'){
      return res.status(400).json({error:'title required'});
    }
    const newtask=new Task({
      title:title.trim(),
      done:false
    });
    const addnewt=await newtask.save();
    res.status(201).json(addnewt);
  }catch(error){
    res.status(500).json({error:'failed to add task to db'});
  }
}

async function toggleTask(req, res) {
  // TODO
}

async function deleteTask(req, res) {
  // TODO
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
