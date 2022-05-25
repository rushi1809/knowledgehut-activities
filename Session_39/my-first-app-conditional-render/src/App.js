import {useState } from 'react';
import {Success} from './components/Authenticate';

function App() {
  let [isLoggedIn,setIsLoggedIn] = useState(false);
  let [username,setUsername] = useState('Guest');
  if(!isLoggedIn)
  {
    return(
      <div><label>Username</label><input type='text' name='Uname' autoComplete='off' onChange={(e)=>setUsername(e.target.value)}/>
      <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
      <div>Username:{username}</div>
      </div>
      
    )
  }
  else
  {
    return (<div className = 'container-fluid'><Success name={username} /></div>)
  }
 
}
export default App;
