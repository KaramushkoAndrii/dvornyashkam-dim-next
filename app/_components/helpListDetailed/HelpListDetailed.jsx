
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';


import './helpListDetailed.scss';
import { slideFromLeft, slideFromRight } from '../Animations';


const HelpListDetailed = ({dataList, translationGroup, isOpen}) => {

    const { t } = useTranslation();

    return (
        <>
            {dataList.map(({header, description, subDescription, type, src, linkContent}, key) => {

                const oddLi = key % 2 === 0 ? slideFromLeft : slideFromRight;
                return (
                    <motion.li {...oddLi} className='detailed__item' key={key}>
                        <h3>{t(`${translationGroup}.${header}`)}</h3>
                        <p>{t(`${translationGroup}.${description}`)}</p>
                        <footer>
                            <p className='sub__text'>{t(`${translationGroup}.${subDescription}`)}</p>
                            {type === "button" ? 
                                <button onClick={isOpen}>{linkContent}</button> : 
                                <a href={`${type}:${src}`} target='_blank'>{linkContent}</a>}
                        </footer>
                    </motion.li>
                )
            })}
        </>
    )
}


export default HelpListDetailed;