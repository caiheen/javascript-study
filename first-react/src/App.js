import React, {useState} from 'react';
import Name from './Name';


function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: ""
  });
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // function getName(e){
  //   setName(e.target.value);
  // }
  // function getAge(e){
  //   setAge(e.target.value);
  // }
  // function getEmail(e){
  //   setEmail(e.target.value);
  // }

  function getUser(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(user)
    setUser({
      // 유저 객체 복사
      ...user,
      [name]: value
    })
  }
 
  function reset(){
    setUser({
      name: "",
      age: "",
      email: ""
    })
  }

  return (
    // jsx
    <>
      <input name="name" onChange={getUser} value={user.name} type="text"/>
      <input name="age" onChange={getUser} value={user.age} type="text"/>
      <input name="email" onChange={getUser} value={user.email} type="text"/>
      {user.name ? (<Name name={user.name} age={user.age} email={user.email} />):null}
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;

