import React, { useState, useRef, useCallback, useEffect } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // React.createRef()를 쓰면 계속 새로 생성되지만 useRef()는 한번만 생성됨

  // onClick에는 계속 새로운 함수가 할당되기 때문에 handleIncrement도 반복 실행된다. => memo를 써도 의미가 없음 => useCallback 사용
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted and updated! : ${count}`);
  }, []); // 원하는 data가 변경되었을 때만 호출되기를 원하면 해당 data를 두번째 인자로 넣어주면 됨. [] 상태면 mounte 되었을 때만 실행

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
