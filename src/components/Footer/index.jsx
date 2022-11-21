import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <div className='todo-footer-left'>
                    <input type="checkbox" />
                    <span>已完成0 / 全部4</span>
                </div>
                <button>清除已完成任务</button>
            </div>
        )
    }
}
