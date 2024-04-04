import React, { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
const ContextTesting = () => {
  const { data, setData } = useContext(DataContext);
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(pre => pre + 1)
    setData((pre) => [...pre, `Data ${count}`])
    console.log(data)
  }

  return <div>
    <button onClick={clickHandler}>Add Items</button>
  </div>;
};

export default ContextTesting;
