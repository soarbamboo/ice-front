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
    "http://img.netbugs.cn/5963baa4caaa.jpg",
    "http://img.netbugs.cn/c2cab1340b08.jpg",
    "http://img.netbugs.cn/3da31a343938.jpg",
    "http://img.netbugs.cn/0a69a6c4a77b.jpg",
    "http://img.netbugs.cn/8857f6646399.jpg"
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
                        images.map((item: any) => <SwiperSlides key={item} >
                            <div style={{ backgroundImage: `url(${item})` }}></div>
                        </SwiperSlides>)
                    }

                </SwiperBox>

            </BannerWrapper>
        )
    }

}