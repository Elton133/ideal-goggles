import { useState } from "react";

export default function ReactState() {
    // const [count, setCount] = useState(0);
    const [happy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!happy);

    // function changeEmoji(){
    //     setIsHappy()
    // }

    // function handleClick(){
    //     setCount(count + 1);
    // }

    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}></button>

            <h1></h1> */}

            <p className="Toggler" onClick={toggleIsHappy}>
                
            </p>
        </div>
    )
}