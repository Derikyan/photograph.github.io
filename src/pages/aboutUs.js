//page Components
import AboutSection from '../components/aboutSection';
import ServicesSection from '../components/servicesSection';
import FaqSection from '../components/faqSection';
import ScrollTop from '../components/scrollTop';

//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation'

const AboutUs = () => {
    return (
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScrollTop />
      </motion.div>
    );
}
  
export default AboutUs;
  