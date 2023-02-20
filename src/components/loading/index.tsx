
import styled, { keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1999;
	transform: translateZ(0);
	align-items: center;
   justify-content: center;
	display: none;
    &.show {
        display: flex;
    }
`;

const wave = keyframes`
  50%, 75% {
    transform: scale(2.5);
  }
  80%, 100% {
    opacity: 0;
  }

`

const LoadingContent = styled.div`
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    display: flex;
`
const LoadingDot = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    margin: 12.8px;
    border-radius: 50%;
    &::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        animation: ${wave} 2s ease-out infinite;
    }

    &:nth-child(1){ background:#7ef9ff; &::before{animation-delay: 1* 0.2s;} }
    &:nth-child(2){ background:#89cff0; &::before{animation-delay: 2 * 0.2s;} }
    &:nth-child(3){ background:#4682b4; &::before{animation-delay: 3 * 0.2s;} }
    &:nth-child(4){ background:#0f52ba; &::before{animation-delay: 4 * 0.2s;} }
    &:nth-child(5){ background:#000080; &::before{animation-delay: 5 * 0.2s;} }

`
const Loading = (props: any) => {
    return (
        <LoadingContent>
            <LoadingDot />
            <LoadingDot />
            <LoadingDot />
            <LoadingDot />
            <LoadingDot />
        </LoadingContent>
    )
}
export default Loading;