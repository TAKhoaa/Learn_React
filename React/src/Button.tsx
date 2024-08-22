//event DOM
/*
DOM.addEventListener('click',function(event) {})
DOM.addEventListener('click',(event) => {})
*/

function Button() {
    const handleClick = () => {
        console.log('clicked');
    }
/*
1. <... onClick = {() => {console.log('clicked');}}...>
2. <... onClick = {() => handleClick()}...>  
3. <... onClick = {handleClick}...> nen viet duoi dang này
*/


    return (
        <button
        onClick = {handleClick  }

            onMouseEnter = {() => {
                console.log('mouse Entered');
            }}
            onMouseLeave = {() => {
                console.log('mouse left');
            }}

        >
            
            Click me!
        </button>
    )
}

export default Button;