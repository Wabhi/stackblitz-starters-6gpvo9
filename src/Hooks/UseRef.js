import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  const [text, setText] = useState('');
  const [randomnumber, setRandomNumber] = useState(0);
  const inputRef = useRef('');
  const prevholdRef = useRef('');
  const handleReset = () => {
    setText('');
    inputRef.current.focus();
    console.log('>>>', inputRef.current.value);
    //inputRef.current.value = 'abhishek';
  };

  useEffect(() => {
    prevholdRef.current = randomnumber;
  }, [randomnumber]);

  const generateRandomNumber = () => {
    setRandomNumber(Math.random() * 1000);
  };
  return (
    <div>
      <h3>I AM USEREF HOOKS</h3>
      <input
        type="text"
        placeholder="Enter something..."
        ref={inputRef}
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleReset}>RESET</button>
      <h4>Hi, {text}</h4>
      <hr />
      <hr />
      <h3>The random number - {randomnumber}</h3>
      {/* {typeof prevholdRef.current === 'undefined' && ( */}
      <h3>previous number - {prevholdRef.current}</h3>
      {/* )} */}
      <button onClick={generateRandomNumber}>GENERATE NUMBER</button>
    </div>
  );
};

export default UseRef;

// useRef() hook is use for access and manipulate the dom element.
//before react, in venila js we use something like getElementby id,class etc
// to access/manipulate the dom element. But in react js we have virtual dom then it's suggested to react to access the dom you can use useref hook function which return the object with propery current which give us all the information related to element.

//never use useRef to update the input value directly.

//useCase for useRef
//1. we can access the dom and manipulate it by useref
//2. we can store the previous state value by useref
//3. we can hold the mutable value between the re-render (I mean previous value)

//when useref value changes then componenet doesn't re-render Only re-render when state change
