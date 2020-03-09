import React from 'react'
//using JSX
const Hello = () =>{
//     return (
//         <div>
//             <h1>Hello Nabin Using JSX</h1>
//         </div>
//)
//withoud using JSX
return React.createElement(
'div',
{id:'hello',className: 'dummyClass'},
React.createElement('h1',null,'Hello Nabin')
)  
}
 



export default Hello