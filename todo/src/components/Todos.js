import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

import TodoForm from './TodoForm';

class Todos extends Component {

  clickHandler = event => {
    event.preventDefault();

    this.props.toggleComplete(parseInt(event.target.id, 10));
  }

  render() {
    const todo = this.props.todos.map(todo => {
      return <li name='todo' id={todo.id} completed={todo.completed} key={todo.id} onClick={this.clickHandler}>
                {todo.value}
                <span name='delete' deleteId={todo.id} >X</span>
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

export default connect(mapStateToProps, { toggleComplete })(Todos);
