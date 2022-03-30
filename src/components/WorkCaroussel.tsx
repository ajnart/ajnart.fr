// import Swiper core and required modules
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { WorkList } from '../data/works';
import WorkCard from './WorkCard';

export default () => (
  <Swiper
    modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
    slidesPerView={1}
    autoplay={{ delay: 5000 }}
    keyboard
    style={{ marginBottom: '50' }}
    pagination={{ clickable: true }}
  >
    {WorkList.map((work) => (
      <SwiperSlide>
        <WorkCard key={work.title} {...work} />
      </SwiperSlide>
    ))}
  </Swiper>
);
