import React from 'react'
import './App.css';
import Tag from './component/Tag'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput : '',
      ToDoList : [],
      filt : []
    }
  }
  getValueInput = (e) => {
    const todo = {text: e.target.value,active:true}
      this.setState({
        userInput : todo
    })
  }
  AddElement = (e) => {
    if(this.state.userInput.text !== undefined && this.state.userInput.text !== '') {
    this.state.ToDoList.push(this.state.userInput)
    this.setState({
      ToDoList : this.state.ToDoList,
      filt : this.state.ToDoList
    })
    } else {
      alert('Mời nhập thông tin')
    }
  }
  Delete = (e) => {
    const atr = e.target.dataset.key
    const indexofDelete = parseInt(atr)
    this.state.ToDoList.splice(indexofDelete,1)
    this.setState({
      ToDoList: this.state.ToDoList,
      filt : this.state.ToDoList
    })
  }
  CheckedComplete = (e) => {
    const atr = e.target.dataset.key
    this.state.ToDoList[atr].active = !this.state.ToDoList[atr].active
    this.setState({
      filt : this.state.ToDoList
    })
  }
  showActive = (e) => {
    this.setState({
      filt : this.state.ToDoList.filter(element => element.active === true)
    })
  }
  showCompleted = (e) => {
    this.setState({
      filt : this.state.ToDoList.filter(element => element.active === false)
    })
  }
  showAllTask = (e) => {
    this.setState({
      filt : this.state.ToDoList
    })
  }
  render () {
    return (
      <div className="container">
        <h1>REACT TODO APP</h1>
        <hr/>
        <div className='main-app'>
          <div className="top">
            <form>
              <input className="InputGetTodo" placeholder='What do you need to do ?' type='text' onChange={this.getValueInput}></input>
              <p className="SubmitTodo"><i class="fa fa-plus" onClick={this.AddElement}></i></p>
            </form>
          </div>
          <Tag tags={this.state.ToDoList} Delete={this.Delete} filt={this.state.filt} CheckedComplete={this.CheckedComplete}/>
          <div className="bottom">
            <input type='submit' value='All Task' onClick={this.showAllTask}></input>
            <input type='submit' value='Active' onClick={this.showActive}></input>
            <input type='submit' value='Completed' onClick={this.showCompleted}></input>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
