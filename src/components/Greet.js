import React from 'react'
/* Normal functional componet syntax*/
// function Greet(){
//     return (
//         <div>
//         <h1>Hello Fona</h1>
//         </div>
//     )

// }
/* Function with Fat Arrow*/
const Greet = props => {

    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} aka {props.ninjaName}
            </h1>
            {props.children}

        </div>
    )

}
export default Greet

