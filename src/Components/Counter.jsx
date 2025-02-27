import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseby1, increaseby5 } from '../Redux/counterSlice/index';

function Counter() {
    const count = useSelector((state) => state.counter.value); // Access `value`
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button className='bg-green-500' onClick={() => dispatch(increaseby1())}>Increase by 1</button> <br></br>
            <button className='bg-yellow-500' onClick={() => dispatch(increaseby5())}>Increase by 5</button>
        </div>
    );
}

export default Counter;
