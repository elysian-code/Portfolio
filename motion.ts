export function slideInFromLeft(delay: number) {
    return{

        hidden: { x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    
    }
}
export function slideInFromRight(delay: number) {
    return{

        hidden: { x: 100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    
    }
}
export const slideInFromTop = {
    

        hidden: { y: -100, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
            
        }
    
    
}
