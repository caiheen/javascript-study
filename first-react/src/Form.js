import React, {useState} from 'react';
import styled from "styled-components";
import Button ,{RedButton} from "./Theme";
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

const BtnColor = styled(Button)`
    cursor: pointer;
    opacity: ${props => props.fadeColor};
`;

function Form() {
  
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
      console.log(colorset);
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
        <BtnColor fadeColor={opacity}>Change</BtnColor>
        <RedButton>Btt</RedButton>
      </>
    );
  }
  
  export default Form;