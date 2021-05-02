import React, {useState} from 'react';
import Header from './Header';
import Name from './Name';
import Footer from './Footer';
import Counter from './Counter';

function App() {

  const [age, setAge] = useState(0);

  function addAge (){
    setAge(age + 3);
  }

  function print(){
    console.log("Hello")
  }
  // login 이름 뽑아옴
  return (
    // jsx
    <>
      <Header name="현규" age="12" />
      <Name name="하은" age={age} />
      <button onClick={print}>나이 추가</button>
      <Footer />
      
      <Counter />
    </>
  );
}

export default App;

