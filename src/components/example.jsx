import React, { useEffect, useState } from "react";

const Example = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, []);

  return (
    <div>
      <p> you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  );
};

export default Example;
