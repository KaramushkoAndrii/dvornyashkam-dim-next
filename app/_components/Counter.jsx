import { useEffect } from "react";
import { useMotionValue, useTransform, motion, animate } from "motion/react";
import { useInView } from "react-intersection-observer";


const Counter = ({startValue = 0, endValue = 100, duration = 5}) => {
    const count = useMotionValue(startValue);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if(inView) {
            const controls = animate(count, endValue, { duration })
            return () => controls
        }
    }, [inView, count, endValue, duration])

    return <motion.pre ref={ref}>{rounded}</motion.pre>
}

export default Counter;