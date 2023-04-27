import React from 'react'

function ChildComponent(props) {
  return (
    <div>
    { // passing parameter form child to parent (to greetParent method)
    <button onClick={() => props.greetHandler('child')}>greetParent</button>
    }
    {    
      // parent method reference   
      //<button onClick={props.greetHandler}>greetParent</button>
    }    
    </div>
  )
}

export default ChildComponent