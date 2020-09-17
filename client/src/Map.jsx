import React, {useState} from 'react'

function Map(props){ 

    const [hover, setHover] = useState(false)

    function handleHover(){ 
        setHover(prev => !prev)
    }

    function handleClick(){ 
       var index = props.index + 1  
        props.updateStyle(index)
    }

    return( 
        <>
            <text 
                display = {hover || props.seatStyle === props.index + 1 ? "block" : "none"}
                x = {props.x}
                y = {props.y + 50}
                fontSize = "10"
                fill = "black"
                height = {props.height}
                width = {props.width}>
                    {props.seat}
            </text>
            <rect 
                onMouseEnter = {() => handleHover()}
                onMouseLeave = {() => handleHover()}
                onClick = {!props.chosen ? () => handleClick() : null}
                x = {props.x}
                y = {props.y}
                height = {props.height}
                width = {props.width}
                fill = {props.chosen ? 'grey' : hover || props.seatStyle === props.index + 1 ? "blue" : "black" }>
            </rect> 

        </>

    )
}

export default Map
