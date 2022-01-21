import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//id가 root인 DOM을 찾아서 App을 렌더링해라.
//root DOM은 public/index.html 파일에서 찾아볼 수 있다.
ReactDOM.render(<App />, document.getElementById('root')); 
