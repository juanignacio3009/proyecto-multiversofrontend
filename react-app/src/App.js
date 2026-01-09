import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error en React:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-container">
      <h2>Módulo React</h2>

      {loading ? (
        <div className="loader">
          <p>Cargando usuarios desde la API...</p>
        </div>
      ) : (
        <div className="grid-container">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="avatar">{user.name.charAt(0)}</div>
              <h3>{user.name}</h3>
              <p className="email">{user.email}</p>
              <p className="company">🏢 {user.company?.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;