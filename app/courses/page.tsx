"use client"
import Image from 'next/image';
import React from 'react';
import ProgressBar from '../components/courses/ProgressBar';
import CoursesBar from '../components/courses/CoursesBar';
import Pagination from '../components/explore/dynamic-explore/Pagination';


const Courses = () => {
  return (
    <div>
        <CoursesBar/>
      <div className='ml-[113px] mt-[57px] mb-[26px]'>
        <h1 className='font-SofiaProMedium text-4xl '>Your Courses</h1>
      </div>
      
      <div className="relative mx-48 pl-9 pt-6 pb-4 border-1 rounded-[50px] shadow-lg">
        <div className="flex items-center">
          {/* Image on the left */}
          <div className="relative h-[279px] rounded-4xl overflow-hidden w-[285px] ">
            <Image
                src="/assets/images/courses/course1.png"
                alt="Description of the image"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl pb-2"
            />
          </div>
          {/* Text and button on the right */}
          <div className="flex flex-col ml-12 flex-grow">
            {/* Two h3 headings */}
            <h3 className="text-6xl font-SofiaProMedium mb-2">Space Weather</h3>
            <ProgressBar progress={36} />
            <h3 className="text-3xl font-SofiaProMedium mb-4">Your Progress</h3>

            {/* Button */}
            <button className="ml-auto right-0 bg-Primary text-Secondary font-SofiaProSemiBold py-5 px-28 mt-1 rounded-3xl mr-20 transition duration-300 ease-in-out hover:bg-Secondary hover:text-Primary hover:shadow-md ">
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-48 mt-8 pl-9 pt-4 pb-6 border-1 rounded-[50px] shadow-lg">
        <div className="flex items-center">
          {/* Image on the left */}
          <div className="relative w-[285px] h-[279px] rounded-4xl overflow-hidden">
            <Image
                src="/assets/images/courses/course2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl pb-2"
            />
          </div>

          {/* Text and button on the right */}
          <div className="flex flex-col ml-12 flex-grow">
            {/* Two h3 headings */}
            <h3 className="text-6xl font-SofiaProMedium mb-2">Aerospace Eng.</h3>
            <ProgressBar progress={72} />
            <h3 className="text-3xl font-SofiaProMedium mb-4">Your Progress</h3>

            {/* Button */}
            <button className="ml-auto right-0 bg-Primary text-Secondary font-SofiaProSemiBold py-5 px-28 mt-1 rounded-3xl mr-20 transition duration-300 ease-in-out hover:bg-Secondary hover:text-Primary hover:shadow-md ">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center mt-24 mb-60 justify-center'>
        <Pagination totalPages={3}/>
      </div>
        
    </div>
  );
}

export default Courses;
