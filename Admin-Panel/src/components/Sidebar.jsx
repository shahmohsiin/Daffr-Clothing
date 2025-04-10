import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MdDashboard,MdAddBusiness , MdSettings, MdNotifications, MdAnalytics, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AllProducts from "../pages/AllProducts";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("All-Product");

  const menus = [
    { name: "All-Product", icon: MdDashboard , url:"/AllProducts" },
    { name: "Add-Product", icon: MdAddBusiness , url:"/Addproducts"},
    { name: "Settings", icon: MdSettings },
    { name: "Notifications", icon: MdNotifications },
    { name: "Analytics", icon: MdAnalytics },
    { name: "Messages", icon: MdMessage }
  ];

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
   
    <div
      className={`fixed left-0 top-0 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out ${isExpanded ? "w-64" : "w-20"} z-50`}
    >
   
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menus.map((menu) => (
            <div key={menu.name} className="relative">
              <Link
              to={menu.url}
                onClick={() => setActiveLink(menu.name)}
                className={`group flex w-full items-center rounded-lg p-3 text-gray-600 transition-all duration-200
                  ${isExpanded ? "justify-start space-x-4" : "justify-center"}
                  ${activeLink === menu.name
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"}
                `}
                aria-label={menu.name}
              >
                <menu.icon
                  className={`h-6 w-6 flex-shrink-0 ${activeLink === menu.name ? "text-blue-600" : ""}`}
                />
                {isExpanded && (
                  <span
                    className={`truncate text-sm font-medium transition-opacity duration-200 ${isExpanded ? "opacity-100" : "opacity-0"}`}
                  >
                    {menu.name}
                  </span>
                )}
                {!isExpanded && (
                  <div className="absolute left-full ml-2 hidden rounded-md bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
                    {menu.name}
                  </div>
                )}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;