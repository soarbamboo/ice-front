import { MenuType, munuList } from "@/src/common/route";
import Link from "next/link";
import React from "react";
import { Content, Header, Nav, NavContent, Main, BrandLogo, MenuList, MenuItem } from "./common";
import { BaseLayoutProps } from "./type";
import MyIcon from "../Icon/index"
import Image from "next/image";
class BaseLayout extends React.PureComponent<BaseLayoutProps> {
    state = {
        scrollTop: 0
    }
    static defaultProps: any = {
        isShowLayout: true
    }

    componentDidMount() {
        console.log(this.props)
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event: any) => {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        this.setState({ scrollTop })
    }
    render() {
        const { isShowLayout, children, path } = this.props;
        if (!isShowLayout) return children;
        // const Img = require("../../assets/images/icon.png");
        return (
            <Content>
                <Header>
                    <Nav
                        // isScroll={this.state.scrollTop > 200} 
                        id="_nav">
                        <NavContent>
                            <BrandLogo>
                                <a href={"/"}>
                                    <img src="./images/index_icon.png" alt={""} />
                                    <span>卡布达</span>
                                </a>
                            </BrandLogo>
                            <MenuList>
                                {
                                    munuList.map((item: MenuType) => {
                                        const isChoose = path === item.link;
                                        return (
                                            <MenuItem key={item.id} isChoose={isChoose}>
                                                <a href={item.link} >
                                                    {item.icon && item.icon !== "" && <MyIcon type={item.icon} color="#fff" size={15} style={{ marginRight: 5 }} />}
                                                    {item.content && item.content !== "" && <span>{item.content}</span>}
                                                </a>
                                            </MenuItem>
                                        )
                                    }

                                    )
                                }
                            </MenuList>
                        </NavContent>
                    </Nav>
                </Header>
                <Main>
                    {this.props.children}
                </Main>
            </Content>
        )
    }

}
export default BaseLayout;