import MyIcon from "@/src/components/Icon";
import React from "react";
import { BannerWrapper, CoverBox, PrevCover, NextCover, SwiperBox, SwiperSlides } from "./common";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const images = [
    'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1675557056210-5cd4cae357f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2826&q=80',
    'https://images.unsplash.com/photo-1675456110409-0746ade01a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80',
    'https://images.unsplash.com/photo-1673454753170-83c796e48bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2875&q=80'
]

export default class IndexBanner extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <BannerWrapper >
                <SwiperBox
                    navigation={true} //左右导航
                    modules={[Navigation, Pagination, EffectFade, Autoplay]}
                    pagination={{ //底部分页
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true} // 循环
                    effect="fade"
                    autoplay={{ //自动播放
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        images.map((item: any) => <SwiperSlides key={item}><img src={item} /></SwiperSlides>)
                    }

                </SwiperBox>

            </BannerWrapper>
        )
    }

}