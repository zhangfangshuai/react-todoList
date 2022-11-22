import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }

    // addTodo用于添加一个任务
    addTodo = (todoObj) => {
        const { todos } = this.state
        // 在数组首部添加一项
        // 这里不能用unshift()，因为它会导致todos直接被更改，而React要求必须通过setState变更（否则不会render）
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    // updateTodo用于更新某一个任务
    updateTodo = (id, done) => {
        const { todos } = this.state
        // 找到对应的任务，覆盖想要覆盖的字段
        const newTodos = todos.map(todo => {
            if (todo.id === id) return { ...todo, done }
            return todo
        })
        this.setState({ todos: newTodos })
    }

    // deleteTodo用于删除某一个任务
    // 注意delete是关键字，不能用作方法名
    deleteTodo = (id) => {
        const { todos } = this.state
        // 过滤要删除的项
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({ todos: newTodos })
    }

    // updateAll用于全部完成/全部未完成
    updateAll = (done) => {
        const { todos } = this.state
        // 覆盖所有的项为勾选/不勾选所对应的状态
        const newTodos = todos.map(todo => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })
    }

    // deleteAllDone用于清除所有已完成任务
    deleteAllDone = () => {
        const { todos } = this.state
        // 过滤所有已完成的项
        const newTodos = todos.filter(todo => !todo.done)
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="app">
                <Header addTodo={this.addTodo} />
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                <Footer todos={todos} updateAll={this.updateAll} deleteAllDone={this.deleteAllDone} />
            </div>
        )
    }
}
