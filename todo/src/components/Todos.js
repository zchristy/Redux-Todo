import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete, deleteTodo, clearCompleted } from '../actions';

import TodoForm from './TodoForm';
import { AppContainer, Card, Todo, Text, Clear } from '../styles/styles'

class Todos extends Component {
  state: {
    deletedTodos: null,
    nonCompletedArr: []
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

  clearCompletedHandler = event => {
    const nonCompletedArr = this.props.todos.filter(todo => {
      return todo.completed === false
    })

    this.setState({
      nonCompletedArr: nonCompletedArr
    }, () => this.props.clearCompleted(this.state.nonCompletedArr))

  }

  render() {
    const todo = this.props.todos.map(todo => {
    return <Todo name='todo' key={todo.id} >
                <Text id={todo.id} completed={todo.completed} onClick={this.completeHandler}> {todo.value} </Text>
                <span name='delete' id={todo.id} onClick={this.deleteHandler} >X</span>
            </Todo>;
    })
    return (
      <AppContainer>
        <h1>TodoList</h1>
        <h4>A list to keep you organized</h4>
        <Card>
          <Clear onClick={this.clearCompletedHandler}>Clear Completed</Clear>
          {todo}
        </Card>
        <TodoForm />
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { toggleComplete, deleteTodo, clearCompleted })(Todos);
