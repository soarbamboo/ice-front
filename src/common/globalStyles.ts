import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		display: flex;
		min-height: 100%;
		width: 100vw;
		font-size: 16px;
		max-width: 100vw;
		-webkit-overflow-scrolling: touch;
		-webkit-text-size-adjust: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
   		overflow: auto;
			/*隐藏滚轮*/
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
		#__next {
			display: flex;
			width: 100%;
		}
		a{
			text-decoration: none ;
		}
	}
`