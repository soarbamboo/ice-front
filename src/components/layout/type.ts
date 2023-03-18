
export interface BaseLayoutProps {
    isShowLayout?: boolean; // 是否需要基础布局 默认为true
    children?: any;
    path: string;
    query: any;
    userInfo: any;
    LayOutTitleType: LayOutTitleType
}
export interface HeaderStaticParams {
    NEED_HEADER?: Boolean;
    TITLE?: string;
    TITLE_TYPE?: LayOutTitleType
}

export enum LayOutTitleType {
    INDEX,// 首首页
    ARTILE,// 文章详情页
}
