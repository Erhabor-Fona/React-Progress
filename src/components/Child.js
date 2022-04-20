import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('Fona')}>Greet Parent</button>
    </div>
  )
}
export default Child
