import React from 'react'

const Box = (props) => {

    return (
        <div className='box'>
            {props.num} - {props.name}
        </div>
    )
}

export default Box