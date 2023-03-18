import styled from "styled-components";



export const ArtileBox = styled.div`
    width: 100%;
    display:flex ;
    justify-content:space-between ;
    flex-wrap: wrap;
`;

export const ArtileItem = styled.div`
    width:50% ;
    padding: 0 18px ;
    box-sizing: border-box;
`;
export const ArtileItemCard = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    max-height: 300px;
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    border: 0;
    border-radius: 10px;
    color: rgba(0, 0, 0, .87);
    background: #fff 50%;
    background-size: cover;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
`;
export const ArtileItemCardBox = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 1.8rem 1.25rem;
    z-index: 2;
    background-color: #333 ;
`
export const ArtileItemCardBoxTag = styled.div`
    margin: 10px auto;
    color: rgba(0, 0, 0, .87);
    &>a{
        color: hsla(0, 0%, 100%, .7) !important;
        font-size: .75rem;
        font-weight: 500;
    }
`
export const ArtileItemCardBoxTitle = styled.div`
    color: #fff;
    height: 48px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.7rem;
`
export const ArtileItemCardBoxDesc = styled.div`
    margin: 20px auto;
    height: 65px;
    font-size: 14px;
    color: hsla(0, 0%, 100%, .78) !important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 18.25px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`
export const ArtileItemCardBoxLink = styled.a`
    background: linear-gradient(to right, #EF4DB6 0%, #C643FC 100%);
    height: 40px;
    margin: 0.6rem 1px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 40px;
    color: #fff;
    border-radius: 30px;
    box-shadow: 0 2px 2px 0 rgba(244, 67, 54, .14), 0 3px 1px -2px rgba(244, 67, 54, .2), 0 1px 5px 0 rgba(244, 67, 54, .12);
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
    padding: 0 16px;
`