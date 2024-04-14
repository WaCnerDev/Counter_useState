import React from 'react'
import { useState } from 'react';
import '../Styles/Counter.css'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='container-counter'>
            <h2>Count: {count}</h2>
            <button className='btn-count' onClick={() => setCount(count - 1)}>-</button>
            <button className='btn-count' onClick={() => setCount(count + 1)}>+</button>
            <button className='btn-count' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter