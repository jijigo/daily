import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Checkbox, Icon } from 'antd';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #eee',
      maxWidth: '500px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox onChange={this.props.markComplete.bind(this, id)}
            checked={this.props.todo.completed}>
            <span style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>
            { title }
            </span>
          </Checkbox>
        </p>
        <Icon type="close" onClick={this.props.deleteTodo.bind(this, id)}/>
        {/* <button >x</button> */}
      </div>
    )
  }
}

// propsType
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
