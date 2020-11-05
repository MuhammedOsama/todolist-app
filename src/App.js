import React, { Component } from 'react';
import TodoItems from './component/TodoItems';
import AddItems from './component/AddItems';

class App extends Component {

  state = {
    items: [
      {id: 1, name: "Mohamed", age: 20},
      {id: 2, name: "Ahmed", age: 22},
      {id: 3, name: "Ali", age: 24},
    ]
  }

  deleteItems = (id) => {
    // First Way
    // let {items} = this.state;
    // let index = items.findIndex(itemId => itemId.id === id);
    // items.splice(index, 1);
    // this.setState({items});

    // Second Way
    let items = this.state.items.filter(itemId => {
      return itemId.id !== id
    })
    this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random();
    let {items} = this.state;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
        <div className="App container">
          <h1 className="text-center">Todo List</h1>
          <TodoItems items={this.state.items} deleteItems={this.deleteItems} />
          <AddItems addItem={this.addItem} />
        </div>
    );
  }
}

export default App;