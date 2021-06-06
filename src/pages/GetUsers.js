import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container} from 'react-bootstrap';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const {jwt} = JSON.parse(token);
        let response = await axios.get('http://localhost:4000/users', {headers: {'Authorization': 'Bearer ' + jwt}})
        setUsers(response.data);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="App">
      <h1>Usuarios</h1>
      <div>
        {users.length === 0 && <div>No tienes permisos suficientes</div>}
        {users.length > 0 && users.map(users => {
          return <div>{JSON.stringify(users)}</div>
        })}
      </div>
    </Container>
  );
}

export default GetUsers;
