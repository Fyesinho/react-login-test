import React, {useState} from "react";
import axios from 'axios';
import '../App.css';
import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    const requestOptions = {username, password};
    const response = await axios.post('http://localhost:4000/auth/login', requestOptions, {headers: myHeaders});
    localStorage.setItem('token', JSON.stringify(response.data));
    setLogin(true);
  }

  return (
    <Container className="App">
      <h1>
        Login
      </h1>
      {!login &&
      <form onSubmit={handlerOnSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type='text'
          placeholder='Email'/>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          placeholder='Contraseña'/>
        <button type='submit'>Login</button>
      </form>
      }
      <Link to='/get-users'>Ir a ver usuarios</Link>
    </Container>
  );
}

export default Login;
