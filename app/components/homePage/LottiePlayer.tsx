'use client'
import Lottie from "lottie-react";
import animatedArrow from '@/public/assets/animations/homePage/dzdrsyvLv7.json'


const LottiePlayer = () => {
  return (
    <>
        <Lottie animationData={animatedArrow} loop={true} />
        
    </>
  )
}

export default LottiePlayer