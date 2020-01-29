import React from 'react';

// function car() {
//     return(
//         <h2>This is a car component</h2>
//     )
// }

// const car =() => {
//     return (
//         <div>This is a car component</div>
//     )
// };

export default props =>
    (<div>
    <p>Car name: {props.name} </p>
        <p>Year: <b>{props.year}</b></p>
      <button onClick={props.onChangeTitle}>Click</button>
</div>)