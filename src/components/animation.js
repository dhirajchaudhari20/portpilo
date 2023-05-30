export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        
        transition: {
            duration: 0.5,
        },
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.5
        },
    }, 
    show: {
        opacity: 1,
        x: 0,
        transition: {
            
            duration: 0.5
        }
    }
}
export const scrollReveal1 = {
    hidden: {
        opacity: 0,
        x: 100,
        transition: {
            duration: 0.5
        },
    }, 
    show: {
        opacity: 1,
        x: 0,
        transition: {
            
            duration: 0.5
        }
    }
}

export const sliderContainer = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .15,
            ease: "easeOut"
        }
    }
}

export const lineAnim = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "50%",
        transition: {
           delay:0.5,
            duration: 1, 
        }
    } 
}
export const lineAnim100 = {
    hidden: {
        width: "0%",
        
    },
    show: {
        width: "200%",
        transition: {
            delay: 0.5,
            duration: 1, 
        }
    } 
}

export const popUp = {
    hidden: {
        scale: 0,
        opacity: 0,
    },

    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

