import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위바위보 버튼
// 3. 버튼 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 선택
// 5. 3번과 4번의 결과를 가지고 승패 보여줌!
// 6. 승패 결과에 따라 테두리 색상 변경

const choice = {
  rock: {
    name : 'Rock',
    img: 'https://yt3.ggpht.com/ytc/AMLnZu9BSithrPLlzAZWRPRHCtEYQfVX0M0aQ7QAU9AS=s900-c-k-c0x00ffffff-no-rj'
  },
  scissors: {
    name: 'Scissors',
    img: 'https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png'
  },
  paper: {
    name: 'Paper',
    img: 'https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png'
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)  //! null은 초기값 
  const [pcSelect, setPcSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    // user 선택
    setUserSelect(choice[userChoice])

    // pc 랜덤선택
    let pcChoice = randomChoice();
    setPcSelect(pcChoice)

    // 결과
    let resultString = judgement(choice[userChoice], pcChoice)
    setResult(resultString)
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length); // Math.random() 은 0과 1 사이 0.44554545 .. 이런 값을 가져온다. 배열길이를 곱해주고, floor 해주면 0, 1, 2, 뽑을 수 있다.  
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user, pc) => {
    if(user.name === pc.name) return 'tie';
    else if(user.name==='Rock') return pc.name==='Scissors' ? 'win' : 'lose';
    else if(user.name==='Scissors') return pc.name==='Paper' ? 'win' : 'lose';
    else if(user.name==='Paper') return pc.name==='Rock' ? 'win' : 'lose';
  }



  return (
    <div>
      <h1 className='page-tit'>버튼을 클릭해 가위바위보를 시작해주세요!</h1>
      <div className='main'>
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={pcSelect} result={result} />
      </div>
      <div className='buttons'>
        <button onClick={()=>play("scissors")}>가위</button>  {/* <button onClick={()=>play("")play("scissors")}>가위</button> 해버리면 함수를 바로 실행해버린다!  */ }
        <button onClick={()=>play("rock")}>바위</button> {/* 함수를 꼭 콜백 함수의 형태로 넣어줘야 한다 */}
        <button onClick={()=>play("paper")}>보</button>
      </div>

    </div>
  );
}

export default App;
