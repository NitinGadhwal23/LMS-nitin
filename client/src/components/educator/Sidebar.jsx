import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: "Dashboard", path: "/educator/educator", icons: assets.home_icon },
    {
      name: "Add Course",
      path: "/educator/add-course",
      icons: assets.add_icon,
    },
    {
      name: "My Courses",
      path: "/educator/my-course",
      icons: assets.my_course_icon,
    },
    {
      name: "Student Enrolled",
      path: "/educator/student-enrolled",
      icons: assets.person_tick_icon,
    },
  ];

  return (
    isEducator && (
      <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500">
        {menuItems.map((e) => {
          return (
            <NavLink
              className={({ isActive }) =>
                `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ? `bg-indigo-50 border-r-[6px] border-indigo-500/90 ` : `hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray-100/90 ` } `
              }
              to={e.path}
              key={e.name}
              end={e.path === "/educator"}
            >
              <img src={e.icons} alt="" className="w-6 h-6" />
              <p className="md:block hidden text-center">{e.name}</p>
            </NavLink>
          );
        })}
      </div>
    )
  );
};

export default Sidebar;
