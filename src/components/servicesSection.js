// import icons
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import camera from '../img/camera.jpeg';

//Styled
import styled from 'styled-components';
import { About, Description, Image } from '../styles';

import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <Description>
                <h2>Բարձրորակ <span>Ծառայություններ</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="iconClock"/>
                            <h3>Արագ</h3>  
                        </div>
                        <p>Ժամկետների խստագույն պահպանում</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="iconMoney"/>
                            <h3>Մատչելի</h3>  
                        </div>
                        <p>Շուկայականից ցածր գներ</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="iconTeamWork"/>
                            <h3>Լավ Սպասարկում</h3>  
                        </div>
                        <p>Ուշադրություն հաճախորդի նկատմամբ</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="iconDiaphragm"/>
                            <h3>Բարձր որակ</h3>  
                        </div>
                        <p>Հրաշալի պատրաստված մասնագետներ</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={camera} alt="camera"/>
            </Image>
        </Services>
    );
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;             
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;
export default ServicesSection;