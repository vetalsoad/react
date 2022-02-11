import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { createTask, fetchTasksList, updateTask, deleteTask } from "./tasksGateway";



class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList()
      .then(tasksList => 
        this.setState({
          tasks: tasksList
        }),
      );
  };

  onCreate = (text) => {
    console.log(text);
    const newTask = {
      text,
      done: false,
    };
    console.log(newTask);

    createTask(newTask)
      .then(()=> this.fetchTasks());
      console.log(newTask);
  };

  handleTaskStatusChange = (id) => { 
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask)
      .then(()=> this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id)
      .then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className='todo-list'>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className='list'>
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
