import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allcourses } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allcourses.find((e) => e._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70" ></div>

        <div className="max-w-xl text-gray-500 z-10">
          <h1>{courseData.courseTitle}</h1>
          <p className="" dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0,200)}}></p>
        </div>

        <div></div>
      </div>
    </>
  ):
   <Loading/>
};

export default CourseDetails;
