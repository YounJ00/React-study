import React, {Component} from "react";

//클래스를 통해 컴포넌트를 만들어준다.
class App extends Component {
  state = {
    hello : 'hello app js!'
  };

  //클래스 형태로 만들어진 컴포넌트에는 꼭, render()함수가 있어야 한다.
  render() {
    //render()함수 안에는 JSX(html코드)를 return해줘야한다.
    return <div className="App">{this.state.hello}</div>;
  }
}

export default App; //작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기를 해준다.
