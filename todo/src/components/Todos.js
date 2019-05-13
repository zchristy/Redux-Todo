import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo } from '../actions';

import TodoForm from './TodoForm';

class Todos extends Component {
  state: {
    deletedTodos: null,
  }

  completeHandler = event => {
    event.preventDefault();

    this.props.toggleComplete(parseInt(event.target.id, 10));
  }

  deleteHandler = event => {
    event.preventDefault();

    const deletedArr = this.props.todos.filter(todo => {
      return todo.id === parseInt(event.target.id, 10);
    });

    this.setState({
      deletedTodos: deletedArr[0]
    },() => this.props.deleteTodo(this.state.deletedTodos));
  }

  render() {
    const todo = this.props.todos.map(todo => {
      return <li name='todo' id={todo.id} key={todo.id} onClick={this.completeHandler}>
                {todo.value}
                <span name='delete' id={todo.id} onClick={this.deleteHandler} >X</span>
            </li>;
    })
    return (
      <div>
        <h1>TodoList</h1>
        <h4>A list to keep you organized</h4>
        <ul>
          {todo}
        </ul>
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { toggleComplete, deleteTodo })(Todos);
