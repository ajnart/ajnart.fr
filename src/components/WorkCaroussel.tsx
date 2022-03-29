import { Carousel } from 'antd';
import { WorkList } from '../data/works';
import WorkCard from './WorkCard';

export default function WorkCaroussel() {
    return (
        <Carousel>
            {WorkList.map((work) => (
                <div>
                    <WorkCard key={work.title} {...work} />
                </div>
            ))}
        </Carousel>
    );
}
