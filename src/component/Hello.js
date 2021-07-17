import {useState} from 'react';
import UserName from './userName';

export default function Hello(props){
    // function showName(){
    //     console.log('park');
    // }

    // function showAge(age){
    //     console.log(age)
    // }

    // function showText(e){
    //     console.log(e.target.value);
    // }

    // let name = 'park';
    const [name, setName] = useState('park');
    const [age, setAge] = useState(props.age);

    function changeName(){
        const newName = name === 'park' ? 'yoon' : 'park';
        setName(newName);
        setAge(age + 1);
    }

    return( 
        <>
           {/* <h1>Hello</h1>
           <button onClick={showName}>show name</button>
           <button onClick={()=>{
               showAge(10);
           }}>show age</button>
           <input type="text" onChange={showText}/> */}

           <h2>{name}({age})</h2>
           <UserName name={name}/>
           <button onClick={changeName}>change</button>
        </>
    );
} 