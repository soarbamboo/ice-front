import BaseStore from '@/src/store/baseStore';
import { action, observable } from 'mobx';
export class MainStore extends BaseStore {
    @observable aaa: boolean = false;
}
const instance = new MainStore();

export default instance;
