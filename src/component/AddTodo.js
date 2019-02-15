import React, { Component } from 'react'
// import Button from 'antd/lib/button';
import {
  Form, Icon, Input, Button,
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export class AddTodo extends Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    })
  }


  render() {
    return (
      <Form style={formStyle}>
        <FormItem style={{width: '100%', flex: '1', marginBottom: '0'}}>
          <Input placeholder="Add Todo..." name="title" style={{width: '100%'}}
            value={this.state.title} onChange={this.onChange}/>
        </FormItem>
        <FormItem style={{marginBottom: '0'}}>
          <Button type="submit" onClick={this.onSubmit}>submit</Button>
        </FormItem>
      </Form>
    )
  }
}

const formStyle = {
  textAlign: 'center',
  display: 'flex',
  margin: 'auto',
  maxWidth: '500px'
}



export default AddTodo
