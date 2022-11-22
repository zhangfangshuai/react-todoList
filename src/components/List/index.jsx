import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
        /* 通常情况下，本页面透传的props是不做格式及必要性检查的 */
    }

    render() {
        // 【技巧】可以把所有本页面要用的都解构展开获取，要透传给子组件的props都折叠放在attrs里
        const { todos, ...attrs } = this.props
        // const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className='todo-list'>
                {
                    // 不能用if语句，但可以使用三目运算。JSX要求只能写JS运算不能写JS语句，即代码执行完成必须有返回值。而if语句没有返回值。
                    todos.length > 0 ? 
                        todos.map(todo => {
                            return <Item key={todo.id} {...todo} {...attrs} />
                            // return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                        })
                    :
                        <div className="todo-item-holder">
                            暂无任务数据
                        </div>
                }
            </ul>
        )
    }
}
