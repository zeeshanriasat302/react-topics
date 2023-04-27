import React from 'react'

function EventHanding(){
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
    <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default EventHanding