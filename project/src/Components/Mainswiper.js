// Import Swiper React components
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Mains = () => {

    const [conswipe, setswipe] = useState([]);
    const swipeapi = async () => {
        try {
            const result = await axios.get('/store/Mbanner', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setswipe([...result.data])
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        swipeapi();
        console.log(conswipe)

    }, [])






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
            slidesPerView={1}
            slidesPerGroup={1}
            className='mt-lg-5'>
            {
                conswipe.map((e, i) => {
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

export default Mains