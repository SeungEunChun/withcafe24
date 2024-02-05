// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Mains = (props) => {







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