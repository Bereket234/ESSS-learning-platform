import Image from 'next/image'
import React from 'react'
import learningLogo from '@/public/assets/images/HomePage/Group 128@2x.png'
import femaleTeacher from '@/public/assets/images/HomePage/Group 33@2x.png'
import cube from '@/public/assets/images/HomePage/Group 16.svg'
import circles from '@/public/assets/images/HomePage/Group 19.svg'
import hexagon from '@/public/assets/images/HomePage/Group 5.svg'
import triangularPrism from '@/public/assets/images/HomePage/Group 14.svg'
import hexagonFilled from '@/public/assets/images/HomePage/Path 707.svg'
import rotatedTriangle from '@/public/assets/images/HomePage/Polygon 1.svg'

import { Poppins } from "next/font/google"
import Link from 'next/link'

const poppins = Poppins({
    weight: ['600'],
    style: 'italic',
    subsets: ['latin']
})



const HeroSection = () => {

    return (
        <section className='flex h-[40vh] min-h-[450px] md:min-h-[800px] md:h-[70vh] lg:h-[95vh]  bg-Tertiary '>
            <div className='flex w-full '>
                <div className="relative flex w-full   flex-col flex-1 justify-center items-center">
                    <Image
                        className='absolute  w-1/4 bottom-0 translate-y-1/2 left-0 translate-x-1/2'
                        src={hexagon}
                        alt='hexagon'
                    />
                    <Image
                        className='absolute max-w-[100px] w-1/6 top-0 left-1/2 '
                        src={rotatedTriangle}
                        alt='rotatedTriangle'
                    />
                    <Image
                        className='absolute min max-w-[80px] w-2/12 bottom-1/2 translate-y-[400%]  translate-x-1/2 right-0 '
                        src={hexagonFilled}
                        alt='hexagonFilled'
                    />
                    <div className='relative w-5/6 md:w-2/3 ml-[-6vw]'>



                        <Image
                            className='hidden md:block absolute w-1/4 top-0 left-0 translate-x-[-60%] translate-y-[-80%] max-w-[100px]'
                            src={triangularPrism}
                            alt='triangularPrism'
                        />
                        <div className=' [font-size:_clamp(25px,3vw,100px)] text-[#707070]'>Welcome to ESSS</div>
                        <Image
                            className='[size:_clamp(25px,3vw,100px)]'
                            src={learningLogo}
                            alt='learning logo'
                        />
                        <button className=" text-Secondary  lg:mr-11 mt-6   bg-Primary rounded-full px-2.5 py-2 md:px-4 md:py-2  lg:px-5 lg:py-3 hover:bg-Secondary hover:text-Primary lg:text-2xl md:text-xl " >
                            <Link href="/register">
                                Get Started
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="  flex items-end justify-center w-full flex-1 ">
                    <div className='relative bottom-0 max-w-[600px] right-0 w-full aspect-[6/7]  '>
                        <Image
                            className='absolute bottom-0 '
                            // fill
                            src={femaleTeacher}
                            alt='femaleTeacher'
                        />


                        <Image
                            className='absolute  top-0 right-0 translate-x-[-10%] w-2/5 '
                            src={circles}
                            alt='circles'
                        />
                        <Image
                            className='absolute hover:animate-pulse top-0 left-[-10%] w-1/6 '
                            src={cube}
                            alt='cube'
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default HeroSection