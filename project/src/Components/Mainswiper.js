import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import Cookies from 'js-cookie'; // js-cookie 라이브러리 import

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Mains = () => {
    const [conswipe, setswipe] = useState([]);

    const swipeapi = async () => {
        try {
            // 쿠키에서 슬라이드 데이터를 먼저 시도하여 가져옵니다.
            const savedData = Cookies.get('swipeData');
            if (savedData) {
                setswipe(JSON.parse(savedData)); // 쿠키에 저장된 데이터가 있으면 상태에 설정
            } else {
                // 쿠키에 데이터가 없으면 API 호출
                const result = await axios.get('/store/Mbanner');
                setswipe([...result.data]);
                // 새로운 데이터를 쿠키에 저장
                Cookies.set('swipeData', JSON.stringify(result.data), { expires: 7, path: '/' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        swipeapi();
    }, []);

    return (
        <Swiper
            id='Mainswiper'
            modules={[Autoplay, Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 3000
            }}
            className='mt-lg-5'>
            {
                conswipe && conswipe.map((e, i) => {
                    return (
                        <SwiperSlide className='swipermobile' key={`mainbanner${i}`}>
                            <img src={e.pcbanner} alt={e.alt} className='d-none d-lg-block img-fluid' />
                            <img src={e.mobanner} alt={e.alt} className='d-lg-none w-100' />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Mains;
