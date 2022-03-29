import { Carousel } from 'antd';
import { WorkList } from '../data/works';
import WorkCard from './WorkCard';

export default function WorkCaroussel() {
  return (
    <Carousel>
      {WorkList.map((work) => (
        <div key={work.title}>
          <WorkCard key={work.title} {...work} />
        </div>
      ))}
    </Carousel>
  );
}
