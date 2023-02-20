import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 100%;

`
export const SwiperSlides = styled(SwiperSlide)`
    & img{
        width:100% ;
        height:100%;
        display:block ;
    }

`;
export const BannerWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height:100vh ;
    /* height: ${__SERVER__ ? "100vh" : window.innerHeight}; */
    /* -webkit-perspective: 500px;
    perspective: 500px; */
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;


`
export const CoverBox = styled.div`
    width: 100%;
    height:100% ;
    display: flex;
    justify-content:space-between ;
`;
const Cover = styled.div`
    position: absolute;
    top: 48%;

    width: 45px;
    height: 45px;
    line-height: 55px;
    border-radius: 45px;
    background: transparent;
    cursor: pointer;
    z-index: 100;
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
    text-align:center ;

    &:hover{
        background-color: rgba(0, 0, 0, .4);
    }

`
export const PrevCover = styled(Cover)`
    left: 8px;
`

export const NextCover = styled(Cover)`
    right: 8px;

`