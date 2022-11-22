import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateAll: PropTypes.func.isRequired,
        deleteAllDone: PropTypes.func.isRequired
    }

    // 全选/取消勾选的回调函数
    handleCheckChange = event => {
        this.props.updateAll(event.target.checked)
    }

    // 清楚已完成任务按钮的回调函数
    handleDeleteAll = (params) => {
        if (window.confirm('确定要删除所有已完成任务吗？')) {
            this.props.deleteAllDone()
        }
    }

    render() {
        const { todos } = this.props
        // 获取当前已完成任务数量
        const doneCount = todos.reduce((prev, todo) => prev += todo.done ? 1 : 0, 0)
        const totalCount = todos.length

        return (
            <div className="todo-footer">
                <div className='todo-footer-left'>
                    <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0} onChange={this.handleCheckChange} />
                    <span>已完成{doneCount} / 全部{totalCount}</span>
                </div>
                <button style={{ display: doneCount > 0 ? 'block' : 'none' }} onClick={this.handleDeleteAll}>清除已完成任务</button>
            </div>
        )
    }
}
