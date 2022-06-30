import './App.css';
import styled from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';
import { useState } from 'react';
import Box from './components/Box';

const AppBlock = styled.div`
    width: 512px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 50px;
    margin: 0 auto;
`;

// const Circle = styled.div`
//     width: 100px;
//     height: 100px;
//     background: ${props=>props.color || 'black' };
//     border-radius: 50%; 
//   `;
 
function App() {
  // useState로 관리할 상수
  // dialog에 false를 지정
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
    console.log(dialog);
  }
  const onCancel = ()=> {
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = ()=> {
    setDialog(false);
    console.log('삭제');
  }
  return (
    <>
      <AppBlock>
          <Button>button1</Button>
          <Button>button2</Button>
          <Button onClick={onClick}>button3</Button>
      </AppBlock>
      {/*컴포넌트에 프롭스로 넣은것을 부모요소(App.js)에서 내용을 준다 */}
      <Dialog 
      title='정말로 삭제하시겠습니까?' 
      confirmText='삭제' 
      cancelText='취소' 
      visible={dialog} 
      onCancel={onCancel} 
      onConfirm ={onConfirm}>
        데이터를 삭제하시겠습니까?
      </Dialog>
      <Box/>
    </>
  );
}

export default App;
