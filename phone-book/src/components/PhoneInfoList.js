import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultsProps = {
        data: [] //data 배열 생성
    }

    render() {
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info}/>)
            //key는 리액트에서 배열을 렌더링할 때 꼭 필요한 값이다.
            //만약에 key값을 부여하지 않으면, 배열의 index값이 자동으로 key로 설정된다.(비효율적임)
        ); //map을 통해 JSX로 변환해준다.

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
