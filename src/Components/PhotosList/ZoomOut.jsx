import React from 'react'
import {motion} from "framer-motion"
import "./style.scss"
const ZoomOut = ({zoom ,setZoom}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('faded'))
        setZoom(null)
    }
    return (
        <motion.div className="faded" onClick={handleClick}
        initial ={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img src={zoom} alt="zoomed in image"
                initial={{x:"+100vh" , y:"+100vh"}}
                animate={{y:0,x:0}}
                transition={{delay:0.2}}
            />
        </motion.div>
    )
}

export default ZoomOut
