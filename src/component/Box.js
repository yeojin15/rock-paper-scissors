import React from 'react'

const Box = (props) => {
    let result;
    if(
        props.title === 'computer' &&
        props.result !== 'tie' &&
        props.result !== ''
    ){
        result = props.result === 'win' ? 'lose' : 'win';
    }else{
        result = props.result;
    }

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img src={props.item && props.item.img} alt="" />  {/* 맨 처음 null 이라서 엣지케이스 가드를 넣어줘야 한다. */}
            <h2>{result}</h2>
        </div>
    )
}

export default Box