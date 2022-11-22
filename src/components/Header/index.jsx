import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // Enter键盘弹起事件回调
    handleKeyUp = (event) => {
        const { target, keyCode } = event
        // 不是回车键或者输入框没有内容，阻断逻辑
        if (keyCode !== 13 || target.value.trim() === '') return
        // 把新任务添加到状态中
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        // 交互优化：添加成功后重置输入框
        event.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <h2>TODOLIST</h2>
                <input type="text" placeholder="请输入任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
