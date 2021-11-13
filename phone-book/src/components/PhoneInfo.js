import React, { Component } from 'react';

class PhoneInfo extends Component {
    //undefined시를 고려해서 defaultProps를 통해 info의 기본값을 설정해준다.
    static defaultProps = {
        //info객체 생성(props로 보낼 것이다.)
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0 //배열 생성시에 고유값을 key로 설정하기 위해 id를 선언해준다.
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;