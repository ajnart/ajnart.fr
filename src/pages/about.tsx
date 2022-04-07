import { NextPage } from 'next';
import InfoCard from '../components/InfoCard';
import { WhoAmI } from '../data/constants';

const About: NextPage = (props) => {
  return <InfoCard {...WhoAmI} />;
};

export default About;
