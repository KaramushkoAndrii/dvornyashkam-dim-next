

export const slideFromLeft = {
    initial: {x: -100, opacity: 0},
    whileInView: {x: 0, opacity: 1},
    transition: {duration: 1},
    viewport: {once: true}
}

export const slideFromRight = {
    initial: {x: 100, opacity: 0},
    whileInView: {x: 0, opacity: 1},
    transition: {duration: 1},
    viewport: {once: true}
}

export const slideFromBottom = {
    initial: {y: 100, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    transition: {duration: 1},
    viewport: {once: true}
}

export const appear = {
    initial: {opacity: 0},
    whileInView: {opacity: 1},
    transition: {duration: 1},
    viewport: {once: true}
};

export const rotateAndScale = {
    initial: {rotate: -360, opacity: 0, scale: 0},
    whileInView: {rotate: 0, opacity: 1, scale: 1},
    transition: {duration: 1},
    viewport: {once: true}
}

export const scale = {
    initial: {scale: 0},
    whileInView: {scale: 1},
    transition: {duration: 1},
    viewport: {once: true}
}