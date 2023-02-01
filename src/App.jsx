import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem';
import TodoItems from './components/TodoItems/TodoItems';
class App extends Component {
  state ={
    items : [
      {id:1 , name : "Hassan" , age : 20},
      {id:2 , name : "Ahmed" , age : 19},
      {id:3 , name : "Mohamed" , age : 22},
    ]
  }
  // deleteItem =(id)=>{
  //   let items = this.state.items ;
  //   let i = items.findIndex((item)=> item.id === id) ;
  //   items.splice(i,1) ;
  //   this.setState({items : items})
  // }
  deleteItem =(id)=>{
    let items = this.state.items ;
    let restItems = items.filter((item)=> item.id !== id) ;
      this.setState({items : restItems})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items ;
    items.push(item) ;
    this.setState({items : items})
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}
export default App ;