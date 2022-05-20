import logo from './logo.svg';
import './App.css';
import { Comment } from './components/Posts';

function App() {
  let comment1 = {
    text : "Hi, How are you!",
    profile : {
      name : 'Mark Zukerberg',
      imgUrl : 'data:image/jpeg;base64,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'
    },
    Likes : '2M'
  }
  let comment2 = {
    text : "Hey!",
    profile : {
      name : 'Alia Bhatt',
      imgUrl :'data:image/jpeg;base64,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'
    },
    Likes : '50K'
  }
  return (
   <div>
    <h1>React app created from react tool kit!</h1>  
    <Comment comment = {comment1}/> 
    <Comment comment = {comment2}/>
   </div>
  );
}

export default App;
