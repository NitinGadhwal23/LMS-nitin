import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CoursesList = () => {
  const {navigate,allcourses} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(()=>{
      if(allcourses && allcourses.length>0){
           const tempCourses = allcourses.slice();
           input ?
            setFilteredCourse(tempCourses.filter(course=>course.courseTitle.toLowerCase().includes(input.toLowerCase())))
           : setFilteredCourse(tempCourses)
      }
  },[allcourses,input])


  // console.log(input)
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex justify-between items-start md:flex-row flex-col w-full gap-6'> 
          <div>
             <h1 className='text-4xl text-gray-800 font-semibold'>Course List</h1>
             <p className='text-gray-500'> <span onClick={()=> navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span className='cursor-pointer' onClick={()=>navigate('/course-list')}>Course List</span></p>
          </div>
          <SearchBar data={input}/>
        </div>
        { input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600 bg-blue-100 rounded-lg'>
            <p>{input}</p>
            <img className='cursor-pointer' onClick={()=>navigate('/course-list')} src={assets.cross_icon} alt='close'/>
          </div>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-16 px-2 md:p-0 '>
            {filteredCourse.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CoursesList

