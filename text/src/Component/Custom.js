import { useState, useEffect } from 'react';


const Custom = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setData(data.users);
        }
        getData();
    }, [])
    return [data];
}

export default Custom;