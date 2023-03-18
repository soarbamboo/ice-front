import React from 'react'
import IndexBanner from './Banner';

import { Main, IndexCard, CardContent, CardContentTitle, Footer, FooterIcp } from './common';
import IndexArtile from './IndexArtile';
import { IndexProps } from './types';
class Home extends React.Component<IndexProps> {
    componentDidMount(): void {
        console.log(this.props);
    }
    render() {
        return (
            <Main>
                <IndexBanner />
                <IndexCard>
                    <CardContent>
                        <CardContentTitle>
                            <div>推荐文章</div>
                        </CardContentTitle>
                        <IndexArtile />
                    </CardContent>
                </IndexCard>
                <Footer><FooterIcp href='https://beian.miit.gov.cn/' target="_blank">陕ICP备19024533号</FooterIcp></Footer>
            </Main >
        )
    }
}

export default Home;