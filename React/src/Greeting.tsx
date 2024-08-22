import React from "react";
//function declarations

// function Greeting(){
//     return <h2>My first Component</h2>
// }

// export default Greeting;

//Arrow function

const Greeting = () => {
    const name = "Khoa";
    return (
        <>
           <div className="someValue">
                <h3>Hello {name}</h3>
               {1+ 1} {Math.random()}
                <ul>
                    <li>
                        <a href="a">Hello World</a>
                    </li>
                </ul>
           </div>
           <h2>Hello</h2>
           <input type="text" name="id" />
        </>
    );
};

export default Greeting;