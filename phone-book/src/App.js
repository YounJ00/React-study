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

  //전화번호 정보를 생성한다.
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data}) //데이터 추가
    })
  }

  //전화번호 정보를 삭제한다
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  //전화번호 정보를 수정핟다
  handleUpdate= (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id 
        ? {...info, ...data} //새 객체를 만들어서 기존의 값과 전달받은 data를 덮어쓴다
        : info //기존의 값을 그대로 유지한다
        
      )
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
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove} //onRemove에 handleRemove를 넣고, PhoneInfoList에게 props로 전달.
          onUpdate={this.handleUpdate} //onUpdate에 handleUpdate를 넣고, PhoneInfoList에게 props로 전달.
        />
      </div>
      //{JSON.stringify(information)} -> information 값을 문자열로 변환하여 보여준다.
    );
  }  
}

export default App;
