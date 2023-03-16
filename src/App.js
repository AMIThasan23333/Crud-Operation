import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

 
  const [users, setUsers]  = useState([]);


  useEffect(() => {

    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  })


  const handleUser = event => {

    event.preventDefault();

    const name = event.target.name.value;

    const email = event.target.email.value;
  
    const user = {name,email}
    console.log(name,email)

    fetch('http://localhost:5000/users', {

    method : 'POST',

    headers : {

      'content-type' : 'application/json'
    },

    body : JSON.stringify(user)


    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))


    event.target.reset();

  }


  return (
    <div className="App">
         
        <h1>Totla users : {users.length}</h1>

        <form onSubmit={handleUser}>

          <input type="text" name="name" id=""  placeholder='name'/>

          <br/>

          <input type="text" name="email" id=""  placeholder='email'/>

          <br/>

          <button type='submit'>submit</button>

        </form>

    </div>
  );
}

export default App;
