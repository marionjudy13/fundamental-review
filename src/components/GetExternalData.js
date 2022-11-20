import React, { useState, useEffect } from "react";

function GetExternalData() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
    setToDos(response);
  };

  return (
    <>
      <h1>useEffect External API Call</h1>
      {todos.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </>
  );
}

export default GetExternalData;
