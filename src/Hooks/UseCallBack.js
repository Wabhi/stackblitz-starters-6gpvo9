import React, { useState, useMemo, useEffect, useCallback } from 'react';

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  // const result = () => {
  //   return fab(count);
  // };
  const result = useMemo(() => {
    return fab(count);
  }, [count]);

  const displayName = useCallback(() => {
    return text;
  }, [text]);
  return (
    <div>
      <h1>I AM USECALLBACK</h1>
      <h4>
        factorial of {count} is {result}
      </h4>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <button onClick={() => setCount(count + 1)}>DECREMENT</button>
      <br />
      <br />
      <br />
      <br />
      <input
        type="text"
        placholder="Enter something..."
        onChange={(e) => setText(e.target.value)}
      />
      {/* <DisplayName name={text} /> */}
      <DisplayName displayName={displayName} />
    </div>
  );
};

export default UseCallBack;

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('<<<<<<<<<<<<,,,');
    setValue(displayName());
  }, [displayName]);
  return (
    <div>
      <h3>My name is : {value}</h3>
    </div>
  );
};

function fab(n) {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n == 0) {
    return 1;
  } else {
    return n * fab(n - 1);
  }
}

//useCallback is used for memoized the function and useMemo is for memoized the value

//and use for refrence equality cheker
