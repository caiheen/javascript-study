import React, {useState} from 'react';
import styled from "styled-components";

const StyleForm = styled.form`
    width: 500px;
    height: 800px;
    margin: 200px auto;
    background: ${props => props.bgColor};
`;

const Input = styled.input`
    width: 100%;
    height: 50px;

`;

const BtnColor = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 0;
    cursor: pointer;
    color: ${props => props.fontColor};
`;

function Form() {
    const colors = ["red", "black", "blue", "pink", "yellow"];
  
    const [user, setUser] = useState({
      email: "",
      password: ""
    });

    const [color, setColor] = useState("");
  
    function getUser(e){
      const name = e.target.name;
      const value = e.target.value;
  
      setUser({
        ...user,
        [name]: value
      });
  
    }
  
    function submit(e){
      e.preventDefault();
      console.log(user.email);
      console.log(user.password);
    }
    function colorChange(){
        let num = Math.floor(Math.random() * 5);

        setColor(colors[num]);

    }
    return (
      // jsx
      <>
        <StyleForm bgColor={color} onSubmit={submit}>
            <Input onChange={getUser} type="text" name="email" value={user.name} placeholder="Email"></Input>
            <Input onChange={getUser} type="password" name="password" value={user.name} placeholder="Password"></Input>
    
            <input type="submit" value="submit" onClick={submit}></input>
        </StyleForm>
        <BtnColor fontColor={color} onClick={colorChange}>Change</BtnColor>
      </>
    );
  }
  
  export default Form;