import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

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
      <div className='todo-form-container'>
        <form onSubmit={this.submitHandler}>
          <input value={this.state.newTodo} onChange={this.changeHandler} type="text" placeholder="Insert your task here..."  />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoForm);
