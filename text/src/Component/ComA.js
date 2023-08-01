import React, { useContext } from 'react';
import { useState, useRef } from 'react';
import ComB from './ComB';
import { MyContext } from '../App'

const ComA = () => {

    const [input, setinput] = useState("");
    const { text1, settext1 } = useContext(MyContext);
    const { text, setname } = useContext(MyContext);
    const prevstate = useRef('');
    const label_ = useRef(""); // this is used to diractili manipulate the dom elememt of the page 

    // useEffect(() => {
    //     prevstate.current = input;
    // }, [input]);

    function onClickb() {
        setname('New Name');
        settext1('New Text');
        label_.current.style.border = '1px solid red';
        prevstate.current.focus();
        prevstate.current.value = 'value is changes ';

    }
    function Event_handal(Event) {
        setinput(Event.target.value);
    }
    return (
        <>
            <div>ComA name and Age is {text.Name + text.age}</div>
            <h1>{text1}</h1>
            <input ref={prevstate} value={input} onChange={Event_handal} />
            <label ref={label_} >This label</label>
            <button onClick={onClickb} >  Click me  </button>
            {/* <p>The Prve state of the dom is {prevstate.current} </p>   */}
            <ComB />
        </>

    )
}

export default ComA