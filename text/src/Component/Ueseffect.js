import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.users); // Update the state with the 'users' array from the API response
        } else {
          console.error("Failed to fetch data from API.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); 

  return (
    <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Four equally sized columns
        gap: '20px', // Gap between grid items (optional)
        justifyContent: 'center', // Center the grid items horizontally
        alignItems: 'center', // Center the grid items vertically
        maxWidth: '1200px', // Optionally limit the container width
        margin: '0 auto', // Center the container on the page
      }} >
      <h1>User Data</h1>
      {data.map((user) => ( 
       <div  key={user.id}>
          <img src={user.image} alt="User Avatar" />
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Username: {user.username}</p>
        </div>
        
      ))}
    </div>
  );
};

export default UseEffectComponent;



// https://dummyjson.com/users
// https://dummyjson.com/products/search?q=Laptop
