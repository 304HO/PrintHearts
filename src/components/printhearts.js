import React, { useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [inputCount, setInputCount] = useState(0);
  const [heartsArr, setHeartsArr] = useState([]);

  const inputHandler = (e) => {
    // 엄격한 양수, 음수 구분을 위해 Number()
    setInputCount(Number(e.target.value));
  };

  const PrintHearts = (count) => {
    let heartsArr = [];
    const heart = "❤️";
    // inputCount 양수일때
    if (inputCount > 0) {
      for (let i = 1; i <= count; i++) {
        heartsArr.push(heart.repeat(i));
        console.log(heart.repeat(i));
      }
      setHeartsArr(heartsArr);
      // inputCount 음수일때
    } else if (inputCount < 0) {
      for (let i = Math.abs(inputCount); i >= 1; i--) {
        heartsArr.push(heart.repeat(i));
        console.log(heart.repeat(i));
      }
      setHeartsArr(heartsArr);
    }
  };

  // inputbox focus에서 enter누름
  const enterkey = () => {
    if (window.event.keyCode == "13") {
      PrintHearts(inputCount);
    }
  };

  return (
    <RootContainer>
      <Title>PrintHearts</Title>
      <div>
        <input
          placeholder="COUNT NUMBER"
          onChange={inputHandler}
          onKeyUp={enterkey}
        />
        <button onClick={() => PrintHearts(inputCount)}>Print ❤️</button>
      </div>
      <div>
        {heartsArr.map((el, idx) => {
          return <div key={idx}>{el}</div>;
        })}
      </div>
    </RootContainer>
  );
};

export default Main;

const Title = styled.h1`
  border-bottom: 1px solid grey;
  line-height: 1.5;
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;