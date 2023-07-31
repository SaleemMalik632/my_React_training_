import React, { useContext } from 'react';
import { useState , useEffect } from 'react';
import { MyContext } from '../App'

const ComA = () => {

    const [input , setinput] = useState("");
    const { text1, settext1 } = useContext(MyContext);
    const { text, setname } = useContext(MyContext);
    function onClickb() {
        settext1('Hello, world!');
        setname({ ...text, Name: 'pak' });
    }
    function Event_handal(Event){
        setinput(Event.target.value);
    }
    return (
        <>
            
            <div>ComA name and Age is {text.Name + text.age}</div>
            <h1>{text1}</h1>
            <input value={input} onChange={Event_handal} />
            <button onClick={onClickb}>  Click me  </button>
        </>

    )
}

export default ComA