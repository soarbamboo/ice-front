

import React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react';


const Content = styled.div`
    background-color:red;
    width:50px ;
    height:50px ;
`;

@inject('mainStore')
@observer
 class Main extends React.Component {
    componentDidMount() {
        console.log("Main", this.props)
    }
    render() {
        return (
            <div >
                <Content>内容</Content>
            </div>
        )
    }
}
export default Main

