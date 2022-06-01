import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import {Forms} from './Comp/Forms'
import {useState} from 'react'
import axios from 'axios';

function Home(){
  return(<div><h2>This is Home component</h2></div>);
}
function Contact(){
  return(<div><h2>This is Contact component</h2></div>);
}
function About(){
  return(<div><h2>This is About component</h2></div>);
}
function Users(){
let [users,setUsers]=useState([]);
let handleClick=()=>
{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{setUsers(res.data)})
  .catch(error=>{console.log(error)})
}
  return(<div>
    <h2>List Of Users</h2>
    <button onClick={handleClick}>Fetch Users</button>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Username</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user,index)=><tr key={index}>
          <td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td></tr>)}
      </tbody>
    </table>
</div>)
}
function App() {
  return ( 
  <div>
    <h1 Style='text-align : centre;'>React Example With Routes and Axiom</h1>
    <div>
      <Link to = "/home">Home</Link>|
      <Link to = "/contact">Contact</Link>|
      <Link to = "/about">About</Link>|
      <Link to = "/login">LogIn</Link>|
      <Link to = "/fetch">Fetch</Link>
    </div>
    <hr/>
    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/login" element = {<Forms/>}/>
      <Route path = "/fetch" element = {<Users/>}/>
      <Route path = "" element = {<Home/>}/>
    </Routes>
  </div> );
}

export default App;
