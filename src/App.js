import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the Flask API
    fetch("http://localhost:5000/api/greet")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flask + React App</h1>
        <p>{message ? message : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
