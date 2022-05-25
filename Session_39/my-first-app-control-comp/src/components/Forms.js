import {useState} from 'react';
export function Forms() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
   
    
    return (<div className = 'form-group'>
        <form onSubmit = {(e) => {e.preventDefault();setName('');setAge('');}}>
            <div>
                <label>Enter name</label><input type = 'text' onChange = {(e)=>{let inputValue=e.target.value;setName(inputValue)}} value = {name}className = 'form-control' autoComplete='off' name = 'n1'></input>
            </div>
            <div>
                <label>Enter age</label><input type = 'text' onChange = {(e)=>{let inputValue=e.target.value;setAge(inputValue)}} value = {age}className = 'form-control' autoComplete='off' name = 'n2'></input>
            </div>
            <div>
                <input type = 'submit' value = 'Submit' className = 'btn btn-primary'></input>
            </div>
            <div>
                Name: {name}!, <br/>Age:{age}
            </div>
        </form>
    </div>)
}