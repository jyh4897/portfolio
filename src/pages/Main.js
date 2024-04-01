import Header from '../components/Header';
import styles from './Main.module.css';
import Banner from '../components/Banner';
import Shopfooter from '../components/Shopfooter';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
import Slider from 'react-slick'; 
import { useState, useEffect, useCallback, useRef  } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Main = () => {

    const best = [
        {name : '뽀시래기 천연조미료',
        price : 8000,
        thumbnail: item1
        },
        {name : '필요 한지갑 명함지갑',
        price : 52000,
        thumbnail: item2
        },
        {name : '다회용 스푼&포크 세트',
        price : 5000,
        thumbnail: item3
        },
        {name : '앞치마(롱)',
        price : 45000,
        thumbnail: item4
        },
        {name : '유니크 컵 슬리브',
        price : 9500,
        thumbnail: item5
        },
        {name : '바른 화장솜',
        price : 7500,
        thumbnail: item6
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        appendDots: dots => (
            <div
            style={{

            }}
            >
            <ul style={{ margin: "0px", height: "20px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className={styles.shopbody}>
            <Header />
            <Banner />
            <div className={styles.bestitems}>
                <div className={styles.besttitle}>
                    <span>BEST</span>
                </div>
                <Slider {...settings} className={styles.bestslidercontainer}>
                    {best && best.length > 0 ? best.map((it, index) => (
                        <div key={index} className={styles.bestcontainer}>
                                <div className={styles.bestimgcontainer}><img src={it.thumbnail} className={styles.bestimg}/></div>
                                <div className={styles.bestname}>{it.name}</div>
                                <div className={styles.bestprice}>{it.price}원</div>
                        </div>
                    )) : ''}
                </Slider>
            </div>
            <Shopfooter />
        </div>
    )
}

export default Main;