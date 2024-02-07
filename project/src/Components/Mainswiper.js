// Import Swiper React components
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Mains = (props) => {

    const [conswipe, setswipe] = useState([]);
    const swipeapi = async () => {
        const result = await axios.get(`/store/mainbanner`)
        setswipe([...result.data])
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
            className='mt-lg-5'>
            {
                props.datasrc.map((e, i) => {
                    return (
                        <SwiperSlide className='swipermobile' key={i}>
                            <img src={`./assets/swiperimg/${e.pcimgslide}`} alt={e.alt} className='d-none d-lg-block img-fluid' />
                            <img src={`./assets/swiperimg/${e.mimgslide}`} alt={e.alt} className='d-lg-none w-100' />

                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    );
};

export default Mains