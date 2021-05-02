import React, {useState} from 'react';

function Counter(){
    const [num, setNum] = useState(0);

    function add(){
        setNum(num + 1);
    }

    function minus(){
        setNum(num - 1);
    }

    return (
        <>
            <p>{num}</p>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </>
    )
}

export default Counter;