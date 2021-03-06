// import React,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Todo from './Components/Todo'
//  class App extends Component {
//   state={
//     items:"hello world"

//   }

//   render() {
//     return (
//       <div className="App">
//       <header className="App-header">
//         <Todo items={this.state.items}/>
 
//       </header>
//     </div>
//     );
//   }
// }


// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


class App extends Component {
  state = {
    todos: [
      
    ]
  }

  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data}))
  }
  //toggle complete in state for todos
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //delete todos
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  //add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;