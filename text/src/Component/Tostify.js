import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClassCom from './ClassCom';

const MyComponent = () => {
  const notify = () => {
    toast.success('Hello, this is a success toast!');
  };

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ClassCom  name ={'saleem'} /> 
    </div>
  );
};

export default MyComponent;
