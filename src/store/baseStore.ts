import { action, observable } from 'mobx';
export default class BaseStore {
    @observable loading: boolean = false;
    @action setState = (params: any, callback?: () => void) => {
        Object.keys(params).forEach((key) => {
            if (key in this) {
                // @ts-ignore
                this[key] = params[key];
            }
        });

        callback && callback();
    };


    @observable userInfo = null;
    @observable scrollTop: number = 0

    constructor() {
        if (__SERVER__) {
            this.userInfo = 1
        } else {
            this.userInfo = 2
        }
    }
}
