import Slider from 'react-slick'; 
import { useState, useEffect, useCallback, useRef  } from 'react'

import styles from './Banner.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import banner4 from '../images/banner4.png';
import banner5 from '../images/banner5.png';
import banner6 from '../images/banner6.png';



const Banner = () => {
    const slickRef = useRef(null);

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);

    const banner = [banner1, banner2, banner3, banner4, banner5, banner6]
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    };

    


    return (
        <div>
            <div className={styles.box}>
                <Slider {...settings} className={styles.slidercontainer} ref={slickRef}>
                {banner && banner.length > 0 ? 
                    banner.map((it, index) => (
                        <div key={index}>
                            <img src={it} className={styles.bannerimg}/>
                        </div>
                    )) : ''}
                </Slider> 
                <div className={styles.arrowcontainer}>
                    <div onClick={previous} className={styles.arrow}>
                        &lt;
                    </div>
                    <div onClick={next} className={styles.arrow}>
                        &gt;
                    </div>
                </div>               
            </div>
            
        </div>
    )
}

export default Banner;