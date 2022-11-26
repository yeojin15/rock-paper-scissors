import { useState } from 'react';
import './App.css';

//! 왠만한거는 state 쓸거고, 잠깐 저장해놔야 하는 값만 변수 쓸거다~

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0); // ! 매개변수는 초기값

  const increase = ()=>{
    counter += 1 // * 카운터는 왜 계속 1이냐면 리렌더링 하느라 0부터 시작해서 1 더한 그것만 나와버림~!

    setCounter2(counter2+1) // ! 비동기적으로 작동한대... 그래서 콘솔찍으면 바로 전 값이 나와버린다.
    // * 변수는 바꾸면 바로 적용되지만, 함수가 끝날 때까지 기다렸다가 실행을 하게 되므로 비동기적 작동이라서 값이 바로 전 값이 출력된다.

    console.log('counter',counter) // 1
    console.log('counter2 state::::::::::::::::::', counter2) // 0 부터 시작 +1

    //? 1. 유저가 버튼을 클릭한다.
    //? 2. counter+1 해서 1이 됨
    //? 3. setState 함수 호출
    //? 4. console.log실행됨
    //? 5. 변수값은 1로 보이고, state 값은 아직 안변했기 때문에 그 전 값이 보인다.
    //? 6. 함수 끝
    //? 7. App 다시 리렌더링
    //? 8. count = 0 을 거치며 새로 초기화되어 +1 부터 시작되어버린다.
    //? 9. 업데이트 된 state값이 보인다.
  }

  return (
    <div>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>click Here</button>
    </div>
  );
}

export default App;
