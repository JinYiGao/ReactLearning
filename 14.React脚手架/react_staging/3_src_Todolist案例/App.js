/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 22:16:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 16:42:38
 */
import React from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component{
    state = {
        todos:[
            {id: '001', name: '吃饭' , done: true},
            {id: '002', name: '睡觉' , done: true},
            {id: '003', name: '敲代码' , done: false},
            {id: '004', name: '逛街' , done: true}
        ]
    }

    addTodo = (todo)=>{
        this.setState({todos: [...this.state.todos, todo]});
    }

    deleteTodo = (id)=>{
        var newTodos = this.state.todos.filter((todo)=>{
            return todo.id !== id;
        })
        this.setState({todos: newTodos});
    }

    changeTodo = (id, done)=>{
        const newTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.done = done;
            }
            return todo;
        })
        this.setState({todos: newTodos});
    }

    checkAllTodos = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            return {...todo, done: done};
        })
        this.setState({todos: newTodos});
    }
    
    clearAllDone = ()=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todo)=>{
            return !todo.done;
        })
        this.setState({todos: newTodos});
    }

    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}></Header>
                <List todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}></List>
                <Footer todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone}></Footer>
                </div>
            </div>
        )
    }
}

export default App;