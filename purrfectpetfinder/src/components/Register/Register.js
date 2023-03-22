import React, { useState } from 'react'
import './Register.css';

async function registerUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
function Register( {setToken} ) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await registerUser({
        username,
        password
      });
      setToken(token);
    }
  return (
    <div className='registration-wrapper'>
        <h1>Please Register Here</h1>
        <form onSubmit={handleSubmit}>
          <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
              <button type="submit">Submit</button>
          </div>
        </form>
        
    </div>

  )
}

export default Register