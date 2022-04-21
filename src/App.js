import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // load data
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // post data to server

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      })

  }

  return (
    <div className="App">
      <h1>My Own data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' required />
        <input type="text" name="email" placeholder='Email' required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id: {user.id} name: {user.name} email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;



// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then(res => res.json())
//       .then(data => setUser(data))
//   }, [])

//   const handleAddUser = event => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const user = (email, name);
//     // post data to server

//     fetch('http://localhost:5000/users', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       })
//   }

//   return (
//     <div className="App">
//       <h1>My own data : {user.length}</h1>
//       <form onSubmit={handleAddUser}>
//         <input type="text" name="name" id="" placeholder='name' />
//         <input type="text" name="email" id="" placeholder='email' />
//         <input type="submit" value="Add User" />
//       </form>
//       <ul>
//         {
//           user.map(user => <li key={user.id}>
//             Name : {user.name}<br></br>
//             Email : {user.email}
//           </li>)
//         }
//       </ul>
//     </div>
//   );
// }

// export default App;
