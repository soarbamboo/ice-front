/**
 * type 与 icon 的 class 同名
 * 如 classname 为 icon-check-circle 的 icon
 * 用法为 <Icon type="check-circle" />
 */
import * as React from "react";
import styled from "styled-components";

interface IconProps {
    type: string;
    className?: string | string[];
    size?: number;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    style?: React.CSSProperties;
}

const I = styled.i`
	font-size: 12px;
	line-height: 12px;
`;

export default class Icon extends React.Component<IconProps> {
    onClick = e => this.props.onClick && this.props.onClick(e);

    render() {
        let {
            type,
            className = [],
            color,
            size,
            style = {}
        } = this.props;

        const iconStyles = { fontSize: size, color, lineHeight: size ? `${size}px` : undefined, ...style };

        return (
            <I
                className={`iconfont  ${type}`}
                style={iconStyles}
                onClick={this.onClick}
            />
        );
    }
}
