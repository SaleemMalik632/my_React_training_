import { useState, useEffect } from 'react';

 

const Custom = () => {
    const [data, setData] = useState([]);
    const [loader, setloader] = useState(false);
 
    useEffect(() => {
        setloader(true);
        async function getData() {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setData(data.users);
            setloader(false);

            } 
        getData();
    }, [])
    return [data , loader];
} 

export default Custom;