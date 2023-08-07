import React, { useState } from 'react';

const heavyOperation = () => {
  console.log('Heavy opration');
  return 0;
};

const UseState = () => {
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(() => {
  //   console.log('Heavy operation ');
  //   return 0;
  // });

  // const [count, setCount] = useState(heavyOperation());
  const [name, setName] = useState('Abhishek Tiwari');
  const [showname, setShowName] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
  };
  const decrement = () => {
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    setCount((prevcount) => prevcount - 1);
    setCount((prevcount) => prevcount - 1);
    setCount((prevcount) => prevcount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const toggle = () => {
    setShowName(!showname);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: todoList.length, task }]);
    setTask('');
  };

  console.log('I AM REDERING AGAIN AGAIN WHEN EVER STATE UPDATE......');
  return (
    <>
      <h1>I AM USESTATE</h1>
      <h3>upadet for number - {count}</h3>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      <hr />
      <hr />
      <hr />
      <h3>upadet for string - {!showname ? name : ''}</h3>
      <button onClick={toggle}>SHOW/HIDE</button>
      <hr />
      <hr />
      <hr />
      <input
        type="text"
        placeholder="Enter todo task....."
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={addTask}>ADD TASK</button>
      {todoList.map((item, index) => {
        return (
          <>
            <li key={index}>{item.task} </li>
          </>
        );
      })}
    </>
  );
};

export default UseState;

//there is another case suppose you want to set initial value of state after heavy operation when you can call the function inside useSate which are performing heavy operation it will perform operation only once and set the initial value for sate .

// like ===> [state,setState] = useState(()=>{ .......your heavy operation......})

//if you declare the function on top of component and calll that function inside the useState() then every time when compoent render it will perform heavy operation again and agian which can cause the performace issue for your application.
