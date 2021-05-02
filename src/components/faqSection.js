import Toggle from './toggle';


//Styled
import styled from 'styled-components';
import { About } from '../styles';

//Framer Motion
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';


const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Հաճախ տրվող <span>հարցեր</span></h2>
            <AnimateSharedLayout>
                <Toggle title="Ի՞նչ ծառայություններ եք առաջարկում">
                    <div className="answer">
                        <p>Տեսահոլովակների և գովազդների նկարահանում </p>
                        <p>լուսանկարահանումներ ձեր ընտրած վայրում կամ ֆոտոստուդիայում</p>
                    </div>
                </Toggle>
                <Toggle title="Ծառայությունների գինը">
                    <div className="answer">
                        <p>Տեսահոլովակի յուրաքանչյուր րոպեն 15000 դրամ</p>
                        <p>Մեկ լուսանկարի արժեքը 2000 դրամ</p>
                    </div>
                </Toggle>
                <Toggle title="Օրվա գրաֆիկ">
                    <div className="answer">
                        <p>Երկուշաբթիից ուրբաթ 9։00-22։00</p>
                        <p>Շաբաթ և կիրակի 10։00-22։00</p>
                    </div>
                </Toggle>
                <Toggle title="Վճարման եղանակներ">
                    <div className="answer">
                        <p>Ընդունվում է վճարման յուրաքանչյուր եղանակ</p>
                        <p>Խոշոր գումարները ցանկալի է վճարել ոչ կանխիկ եղանակով</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

 export default FaqSection;