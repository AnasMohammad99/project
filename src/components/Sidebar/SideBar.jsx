import { NavLink } from "react-router-dom";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { AssignmentInd, Checkroom, Home, Inventory, Menu, Paid, Sell } from "@mui/icons-material";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <Home />,
  },
  {
    path: "/Dresses",
    name: "فساتين",
    icon: < Checkroom />,
  },
  {
    path: "/Customers",
    name: "عملاء",
    icon: <AssignmentInd />,
  },
  {
    path: "/Importers",
    name: "موردون",
    icon: <Inventory />,
  },
  {
    path: "/Reservation",
    name: "الحجز",
    icon: <Sell />,
  },
  {
    path: "/Transactions",
    name: "السندات",
    icon: <Paid />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "20%" : "5%",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  أتيلية
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <Menu onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
