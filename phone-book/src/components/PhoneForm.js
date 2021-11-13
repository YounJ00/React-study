import React, { Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        //e.preventDefault()라는 함수의 뜻은 원래 이벤트가 해야하는 작업을 방지시킨다는 의미.
        //원래는 form에서 submit이 발생하면 페이지를 다시 불러오게 되는데요,
        //그렇게 되면 우리가 지니고있는 상태를 다 잃어버리게 되니까 이를 통해서 방지해준다.
        e.preventDefault(); //페이지 리로딩 방지
        //props로 받은 onCreate함수(handleCreate)를 호출한다.
        this.props.onCreate(this.state); //name,phone 상태값을 onCreate를 통하여 부모에게 전달
        this.setState({
            name: '',
            phone: ''
        }) //상태 초기화
    }

    //render부분에서 input을 렌더링 할 때에는 value값과 onChange값을 넣어준다.
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    //우리가 데이터를 등록하고나면 이 name값을 공백으로 초기화 해줄건데요,
                    //그렇게 초기화 됐을 때 input에서도 반영이 되도록 value를 설정해주었다.
                    value={this.state.name}
                    //onChange는 input의 텍스트 값이 바뀔때마다 발생하는 이벤트이다.
                    //여기에 우리가 만들어둔 handleChange를 설정했다.
                    onChange={this.handleChange}
                    //onChange 이벤트가 발생하면 e.target.value값을 통해 이벤트 객체에
                    //담겨있는 현재의 텍스트 값을 읽어올 수 있다.
                />

                <input
                    name="phone"
                    placeholder="전화번호"
                    value={this.state.phone} 
                    onChange={this.handleChange}
                />

                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;