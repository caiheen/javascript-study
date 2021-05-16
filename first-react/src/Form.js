import React, {useState} from 'react';
import styled from "styled-components";

const StyleForm = styled.form`
    width: 500px;
    height: 300px;
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
    opacity: ${props => props.fadeBtn};
`;

function Form() {
    const colors = ["red", "black", "blue", "pink", "yellow"];
  
    const [colorset, setColorset] = useState({
      color: "",
      opacity: ""
    });

    const [color, setColor] = useState("");
    const [opacity, setOpacity] = useState("");
  
    function getColorSet(e){
      const name = e.target.name;
      const value = e.target.value;
  
      setColorset({
        ...colorset,
        [name]: value
      });
  
    }
  
    function submit(e){
      e.preventDefault();
        setColor(colorset.color);
        setOpacity(colorset.opacity);
    }
    // function colorChange(){
    //     let num = Math.floor(Math.random() * 5);

    //     setColor(colors[num]);

    // }
    return (
      // jsx
      <>
        <StyleForm bgColor={color} onSubmit={submit}>
            <Input onChange={getColorSet} type="text" name="color" value={colorset.color} placeholder="color"/>
            <Input onChange={getColorSet} type="text" name="opacity" value={colorset.opacity} placeholder="opacity"/>
    
            <input type="submit" value="submit" onClick={submit}/>
        </StyleForm>
        <BtnColor fadeBtn={opacity} >Change</BtnColor>
      </>
    );
  }
  
  export default Form;