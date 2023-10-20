import "./App.css"
import Pages from "./components/pages/Pages"
import ProtectedRoutes from "./components/protected-routes/protectedroutes"

function App() {
  return <Pages />
}

export default App

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App