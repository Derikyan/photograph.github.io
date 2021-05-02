//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Կապվեք մեզ հետ</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Ուղարկել հաղորդագրություն</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Ուղարկել էլեկտրոնային նամակ</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: white;
    min-height: 90vh;
    @media (max-width: 1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`;
const Title = styled.div`
    margin-bottom: 4rem;
    @media (max-width: 1500px){
        margin-top: 5rem;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`;
  
export default ContactUs;
  