import React, { Component } from 'react' // component 必須有這一行
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ))
    }
}

// propsType
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;