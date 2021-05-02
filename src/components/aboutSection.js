import cameraMan from '../img/cameraMan.jpg';
import {Link} from 'react-router-dom';

import { About, Description, Image, Hide } from '../styles';
//Framer motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './wave';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Մեզ հետ բոլոր
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            <span>երազանքներն</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>իրագործելի են</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Կապվեք մեզ հետ լուսանկարչության կամ տեսանկարահանման ցանկացած գաղափարի դեպքում:
                </motion.p>
                <Link to="/contact"><motion.button variants={fade}>Կապվել մեզ հետ</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={cameraMan} alt="guy with camera"/>
            </Image>
            <Wave />
        </About>
    );
}


export default AboutSection;