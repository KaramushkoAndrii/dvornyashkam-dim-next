
import { motion } from 'motion/react';

import { slideFromBottom } from '../Animations';

import './map.scss';

const Map = ({data}) => {

    const {src} = data;

    const srcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.2802503695028!2d30.414639407952894!3d50.51331535406526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd5de066ead3%3A0x8b29936e4d5e2e2e!2z0L_RgNC-0YHQvy4g0JPQtdC-0YDQs9C40Y8g0JPQvtC90LPQsNC00LfQtSwgMjQsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1734873850482!5m2!1sru!2sua";

    return (
        <motion.div {...slideFromBottom} className="mapContainer">
            <iframe
                src = {src ? src : srcMap}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            />
        </motion.div>
    );
};

export default Map;
