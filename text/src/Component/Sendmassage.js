import { useState } from 'react';

 function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi! Bro'); 
  if (isSent) { 
    return <h1>Your message is on its way!</h1>
  }
  function sendMessage(massage){
    alert(massage);
  }
  return (
    <form onSubmit={(e) => {e.preventDefault();setIsSent(true); sendMessage(message);}}> 
      <textarea placeholder="Message"value={message} onChange={e => setMessage(e.target.value)} /> 
      <button type="submit">Send</button> 
    </form>
  );
}

 export default Form;