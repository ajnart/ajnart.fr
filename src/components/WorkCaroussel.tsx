// import Swiper core and required modules
import { Pagination, A11y, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { WorkList } from '../data/constants';
import WorkCard from './WorkCard';

export default function ProjectCaroussel() {
  return (
    <Swiper
      modules={[Pagination, A11y, Keyboard, Autoplay]}
      style={{
        maxWidth: '100%',
        maxHeight: '100vh',
      }}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      keyboard
      loop
      pagination={{ clickable: true }}
    >
      {WorkList.map((work) => (
        <SwiperSlide key={work.title}>
          <WorkCard key={work.title} {...work} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
