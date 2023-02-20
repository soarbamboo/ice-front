import * as React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import store from "@/src/store";
import { Provider } from "mobx-react";

function withObserver<P extends any>(WrapperComponent) {

    class WithTransPageComponent extends React.Component<P> {
        render() {
            return (
                <Provider {...store}><WrapperComponent {...this.props} /></Provider>
            );
        }
    }
    return hoistNonReactStatic(WithTransPageComponent, WrapperComponent) as any;
}

export default withObserver;