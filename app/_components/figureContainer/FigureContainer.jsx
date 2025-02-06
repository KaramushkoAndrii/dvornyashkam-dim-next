
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';


import './figureContainer.scss';


const FigureContainer = ({src, alt, text, ...props}) => {

    const { t } = useTranslation();

    return (
        <motion.figure {...props} className='figure-container'>
            <img src={src} alt={alt} />
            <figcaption>{t(`${text}`)}</figcaption>
        </motion.figure>
    )
}

export default FigureContainer;