import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2 //렌더링과 상관이 없는 값이기 때문에 일반 클래스 내부 변수로서 선언해주었다.
  state = {
    information: [
      {
        id: 0,
        name: '함',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '윤',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data}) //데이터 추가
    })
  }

  render() {
    const {information} = this.state;
    return(
      <div>
        <PhoneForm 
          onCreate={this.handleCreate} 
          //onCreate에 handleCreate를 넣고, 이것을 자식 컴포넌트(PhoneForm.js)에게 props로 전달해준다.
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
      //{JSON.stringify(information)} -> information 값을 문자열로 변환하여 보여준다.
    );
  }  
}

export default App;
