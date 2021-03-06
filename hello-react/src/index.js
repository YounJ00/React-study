import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//브라우저 상에 작성한 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render()함수를 사용함
//첫번째 파라미터는 렌더링 할 결과물이고, 두번째에는 컴포넌트를 어떤 DOM에 그릴지 정해준다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
