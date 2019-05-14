import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import { Form , FormContainer } from '../styles/styles'

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  submitHandler = event => {
    event.preventDefault();

    this.props.addTodo(this.state.newTodo);

    this.setState({
      newTodo: ''
    })
  }

  changeHandler = event => {
    let value = event.target.value;
    this.setState({
      newTodo: value
    });
  }

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.submitHandler}>
          <input value={this.state.newTodo} onChange={this.changeHandler} type="text" placeholder="Insert your task here..."  />
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoForm);
