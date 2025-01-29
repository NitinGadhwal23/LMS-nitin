import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'

const CoursesList = () => {
  const {navigate,allcourses} = useContext(AppContext)
  const {input} = useParams()
  console.log(input)
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex justify-between items-start md:flex-row flex-col w-full gap-6'> 
          <div>
             <h1 className='text-4xl text-gray-800 font-semibold'>Course List</h1>
             <p className='text-gray-500'> <span onClick={()=> navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Course List</span></p>
          </div>
          <SearchBar data={input}/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-16 px-2 md:p-0 '>
            {allcourses.map((course,index)=><CourseCard key={index} course={course}/>)}
        </div>
      </div>
    </>
  )
}

export default CoursesList

