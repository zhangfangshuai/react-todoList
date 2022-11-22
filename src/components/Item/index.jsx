import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    // Item私有的状态，存放在自己组件上
    state = {
        isMouseEnter: false
    }

    // 鼠标移入移出事件的回调
    // 需要入参时，使用高阶函数+柯里化
    handleMouseEvent = (flag) => {
        return () => {
            this.setState({ isMouseEnter: flag === 'enter' })
        }
    }

    // 多选框选中的回调
    handleChecked = (event, id) => {
        // 更新任务选中状态
        this.props.updateTodo(id, event.target.checked)
    }

    // 删除按钮的回调
    // 这里未使用高阶函数+柯里化方案，而是在JSX中直接定义回调函数。两种方案任选其一
    handleDelete = (id) => {
        if (window.confirm('确定要删除此任务吗？')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { isMouseEnter } = this.state
        return (
            <li className='todo-item' style={{ background: isMouseEnter ? '#F5F5F5' : '#FFF'}} onMouseEnter={this.handleMouseEvent('enter')} onMouseLeave={this.handleMouseEvent('leave')}>
                <div style={{ opacity: done ? 0.4 : 1 }}>
                    <input type="checkbox" checked={done} onChange={event => this.handleChecked(event, id)} />
                    {name}
                </div>

                <button style={{ display: isMouseEnter ? 'block' : 'none' }} onClick={() => this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
