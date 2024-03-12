import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

function Scrollimg2() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in',
            once: true,
        });


        const handleScroll = () => {
            const element = document.getElementById('main_promo'); // 
            const rect = element.getBoundingClientRect();
            const scrollPosition = window.scrollY + window.innerHeight;


            if (scrollPosition > rect.top + window.scrollY) {
                Aos.refresh();
            }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id='main_promo' className='d-md-flex'>
            <div className='fadeInRight' data-Aos="fade-right">
                <Link to="./product/all">
                    <img src="./assets/aosimg/aos2.jpg" alt="메인배너2" className='img-fluid' />
                </Link>
            </div>
            <div className='fadeInLeft' data-Aos="fade-left">
                <Link to="./product/all">
                    <img src="./assets/aosimg/aos3.jpg" alt="메인배너3" className='img-fluid' />
                </Link>
            </div>


        </section>
    )
}

export default Scrollimg2
