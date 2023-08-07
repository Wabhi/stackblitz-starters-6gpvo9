import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [time, setTime] = useState(new Date().toDateString());
  const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   console.log('HIIII I AM RUNIGN USEFFECT');
  //   const interval = setTimeout(showDate, 1000);
  //   return () => {
  //     console.log('HIIII I AM clearing...');

  //     clearInterval(interval);
  //   };
  // }, [time]);

  const showDate = () => {
    setTime(new Date().toString());
  };

  return (
    <div>
      <h1>I AM USEEFFECT</h1>
      <h3>{time}</h3>
      <button>HIDE/SHOW</button>
    </div>
  );
};

export default UseEffect;

//useEffect is a hook to perform side effect in functional compoent before the function compoennt we perform side effects in class compoenent with help of
//ComponentDidMount - when component mount
//ComponentDidUpdate - when component update after state change
// ComponentWillUnmount - when component destroy I mean when compoent unmount

// these are life cycle method of component in class base component
// but in functional component we can achive by useEfect.

//it accepts two thing first what kind of side effect you want to perform and second dependency array, if you won't provide dependecy array, it will run evevry time when compoent render. To avoid this we can use empty dependency array so that it will run only once when first time component render. If you want to run useEffect when state update we can pass it in dependency array.

//it also return a function which is usefull to make compoenent unmount.
