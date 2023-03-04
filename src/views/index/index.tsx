import React from 'react'
import IndexBanner from './Banner';

import { Main, IndexCard, CardContent, CardContentTitle } from './common';
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

                        </CardContentTitle>
                    </CardContent>
                </IndexCard>
            </Main>
        )
    }
}

export default Home;