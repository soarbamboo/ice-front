export interface MenuType {
    id: string;
    content: string;
    icon?: string;
    link: string
}
export const munuList: MenuType[] = [
    {
        id: "1",
        content: "首页",
        link: "/",
        icon: "iconhome-full"
    },
    {
        id: "2",
        content: "标签",
        link: "/test2",
        icon: "icon24gf-tags2"
    },
    {
        id: "3",
        content: "分类",
        link: "/test3",
        icon: ""
    },
    {
        id: "4",
        content: "归档",
        link: "/test4",
        icon: ""
    },
    {
        id: "5",
        content: "关于",
        link: "/test5",
        icon: ""
    },
    {
        id: "6",
        content: "留言板",
        link: "/test6",
        icon: ""
    },
    {
        id: "7",
        content: "友情链接",
        link: "/test7",
        icon: ""
    },
]