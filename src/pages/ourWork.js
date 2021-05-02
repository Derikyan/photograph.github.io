import ScrollTop from '../components/scrollTop';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

//Images
import nature1 from "../img/nature1.jpeg";
import car1 from '../img/car1.jpg';
import sevan1 from '../img/sevan1.jpg';

//Animation
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/useScroll';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider} ></Frame1>
                <Frame2 variants={slider} ></Frame2>
                <Frame3 variants={slider} ></Frame3>
                <Frame4 variants={slider} ></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>Բնություն</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={nature1} alt="Բնություն" />
                    </Hide>
                </Link>
            </Movie>

            <Movie variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>Ավտոմեքենաներ</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={car1} alt="Ավտոմեքենաներ" />
                </Link>
            </Movie>

            <Movie variants={fade} ref={element2} animate={controls2} initial="hidden">
                <h2>Սևանալիճ</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={sevan1} alt="Սևանալիճ" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>

    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px){
        padding: 2rem 3rem;
    }

    h2{
        padding: 1rem 0rem;
        color: white;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #4AB0F3;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;
  