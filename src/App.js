import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header'
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import About from './component/pages/About';
import FormItem from 'antd/lib/form/FormItem';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Axios from 'axios';
import { read } from 'fs';

class App extends Component {
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
  }

  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const deleteIndex = this.state.todos.findIndex(todo => todo.id === id);
    this.state.todos.splice(deleteIndex, 1);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: this.state.todos
        })
      })
  }

  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <TodoList todos={this.state.todos} markComplete={this.markComplete}
                deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
