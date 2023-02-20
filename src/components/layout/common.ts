import styled, { css, Keyframes } from 'styled-components';

export const Content = styled.div`
    width: 100%;
    height: auto;
    position: relative ;
`


export const Header = styled.header`
  position: relative;
  height: 64px;
  z-index: 997;
  width: 100%;
`;

export const Nav = styled.nav`
    position: fixed;
    height: 64px;
    line-height: 64px;
    color: #fff;
    width: 100%;
    ${(props: { isScroll?: boolean }) =>
        props.isScroll ?
            css`
           background-color: #ee6e73;
            background-image: linear-gradient(to right, #7d3dcc 0%, #4674f3 100%);
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%);
		`:
            css`
            background-color: transparent !important;
            background-image: none;
            box-shadow: none;
		`
    };
`;
export const NavContent = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 90%;
  max-width: 1125px;
    display:flex ;
    justify-content:space-between ;
`;
export const BrandLogo = styled.div`
    display: inline-block;
    padding: 0;
    &>a{
        vertical-align: top;
        position: relative;
        font-size: 26px;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        user-select: none;
        vertical-align: middle;
        z-index: 1;
        transition: .3s ease-out;
        text-decoration:none;
        color: #fff;
    }
    & img{
        width:30px ;
        height: 30px;
        vertical-align: middle;
        padding-bottom: 4px;
        position: relative;
        z-index: -1;
        border-radius:50% ;
        margin-right:5px ;
    }
`

export const MenuList = styled.div`
    display:flex ;
    justify-content:right;
    flex-wrap:nowrap ;

`
export const MenuItem = styled.div`
    transition: background-color .3s;
    padding: 0;
    ${(props: { isChoose?: boolean }) =>
        props.isChoose &&
        css`
            background-color: rgba(0,0,0,0.1);

		`
    };


    &>a{
        position: relative;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        z-index: 1;
        transition: .3s ease-out;
        display: block;
        padding: 0 15px;
        cursor: pointer;

        &>span{
            font-size: 16px;
            color: #fff;
        }
    }
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
`


export const Main = styled.main`
  /* margin-top: 64px; */
  width: 100%;
`;

