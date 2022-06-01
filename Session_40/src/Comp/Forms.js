import {useState} from 'react';
export function Forms() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');  
    return (<div>
        <form onSubmit = {(e) => {e.preventDefault();setName('');setAge('');}}>
            <div>
                <label>Enter name</label><input type = 'text' onChange = {(e)=>{let inputValue=e.target.value;setName(inputValue)}} value = {name} autoComplete='off' name = 'n1'></input>
            </div>
            <div>
                <label>Enter age</label><input type = 'text' onChange = {(e)=>{let inputValue=e.target.value;setAge(inputValue)}} value = {age} autoComplete='off' name = 'n2'></input>
            </div>
            <div>
                <input type = 'submit' value = 'Submit'></input>
            </div>
            <div>
                Name: {name}!, <br/>Age:{age}
            </div>
        </form>
    </div>);
}