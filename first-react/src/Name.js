import React from 'react';

function Name(props){
    return(
        <>
        <h1>{props.name}님 어서오세요.</h1>
        <h2>{props.age}</h2>
        </>
    )
}
export default Name;