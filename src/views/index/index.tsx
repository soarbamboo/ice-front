import React from 'react'
import IndexBanner from './Banner';

import { Main } from './common';
import { IndexProps } from './types';
class Home extends React.Component<IndexProps> {
    componentDidMount(): void {
        console.log(this.props);
    }
    render() {
        return (
            <Main>
                <IndexBanner />
                <div style={{ width: "100%", height: 200, backgroundColor: "red" }}>11111</div>
                <div style={{ width: "100%", height: 200, backgroundColor: "ActiveCaption" }}>222</div>
                <div style={{ width: "100%", height: 200, backgroundColor: "ButtonFace" }}>11333111</div>
                <div style={{ width: "100%", height: 200, backgroundColor: "thistle" }}>444</div>
                <div style={{ width: "100%", height: 200, backgroundColor: "InactiveCaptionText" }}>111555511</div>

            </Main>
        )
    }
}

export default Home;