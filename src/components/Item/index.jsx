import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        return (
            <li className='todo-item'>
                <div>
                    <input type="checkbox" />
                    xxxxxx
                </div>

                <button style={{display: 'none'}}>删除</button>
            </li>
        )
    }
}
