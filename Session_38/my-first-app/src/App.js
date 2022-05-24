import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
export class User extends Component{
   constructor(props)
   {
     super(props);
     this.state={Likes:0,Dislikes:0}
   }
   handleClick = (e)=>{
   this.setState({Likes:this.state.Likes+1}) }
   handleClick1 = (e)=>{
    this.setState({Dislikes:this.state.Dislikes+1}) }
   
   render(){
     return(
     <div><button onClick={this.handleClick}>Likes</button>{this.state.Likes}
     <div>
     <button onClick={this.handleClick1}>Dislikes</button>{this.state.Dislikes}</div>
     </div>);
  
   }
};
function App() {
  return (<div><User/></div> );
}

export default App;
