import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri/index.esm.js";
import { usePage, Link } from "@inertiajs/react";
import { FaDatabase } from "react-icons/fa6/index.esm.js";
const Dropdownv2 = ({ title, children, props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative inline-block text-right w-auto mx-5", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleDropdown,
        type: "button",
        className: `inline-flex justify-center w-full rounded-md px-6 py-2 text-sm text-white font-medium focus:outline-none hover:bg-[#C69749] transition-all ease-in-out duration-300 ${props == "true" ? "border-[#C69749] bg-[#C69749] focus:border-[#C69749]" : ""}`,
        id: "options-menu",
        "aria-haspopup": "true",
        "aria-expanded": "true",
        children: [
          title,
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: isOpen ? /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { rotate: 0 },
              animate: { rotate: 180 },
              transition: { duration: 0.3 },
              className: "text-4xl",
              children: /* @__PURE__ */ jsx(RiArrowDropUpLine, {})
            }
          ) : /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { rotate: 0 },
              animate: { rotate: 90 },
              transition: { duration: 0.3 },
              className: "text-4xl",
              children: /* @__PURE__ */ jsx(RiArrowDropUpLine, {})
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: -10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: -10 },
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        },
        className: "origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
        role: "menu",
        "aria-orientation": "vertical",
        "aria-labelledby": "options-menu",
        children: /* @__PURE__ */ jsx("div", { className: "py-1", role: "none", children })
      }
    ) })
  ] });
};
function FooterAdmin() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("footer", { className: "text-white text-center mx-1 fixed bottom-0", children: [
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("span", { className: "bg-[#C69749] w-fit px-2", children: [
      "copyright ",
      year,
      " sac-po.com"
    ] }),
    /* @__PURE__ */ jsx("hr", {})
  ] }) });
}
function Sidebar({ user, children, onDataClick }) {
  usePage();
  const buttonVariants = {
    initial: {
      paddingTop: "0px",
      paddingBottom: "0px",
      borderRadius: "0px",
      margin: "1.25rem"
    },
    hover: {
      backgroundColor: "#C69749",
      borderRadius: "6px",
      paddingTop: "10px",
      paddingBottom: "10px"
    }
  };
  const isActive = (routeName) => {
    const urls = route(routeName);
    const page = window.location.href == urls;
    return page ? "bg-[#C69749] py-2.5 mx-5 rounded-lg" : "";
  };
  const dropActive = (routeName) => {
    const urls = route(routeName);
    const page = window.location.href == urls;
    return page ? "bg-[#C69749] hover:bg-[#C69749] text-white" : "";
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen bg-[#FFFFFF]", children: [
    /* @__PURE__ */ jsxs("section", { id: "sidebar", className: "max-h-full bg-[#282A3A]", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-56", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            id: "name-user",
            className: "flex items-center justify-center bg-[#C69749] rounded-lg p-2 m-4",
            children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Log, in As Admin" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-x-3 my-2 bg-[#C69749] py-2 text-white", children: [
            /* @__PURE__ */ jsx(FaDatabase, {}),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Master Data" }),
            /* @__PURE__ */ jsx(FaDatabase, {})
          ] }),
          /* @__PURE__ */ jsx("hr", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { id: "nav-link", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: buttonVariants,
              initial: `${isActive("dashboard") ? "" : "initial"}`,
              whileHover: `${isActive("dashboard") ? "" : "hover"}`,
              id: "btn-1",
              className: `text-white text-center text-md my-5 ${isActive(
                "dashboard"
              )}`,
              children: /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: /* @__PURE__ */ jsx("span", { children: "Dashboard" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: buttonVariants,
              initial: `${isActive("paket.index") ? "" : "initial"}`,
              whileHover: `${isActive("paket.index") ? "" : "hover"}`,
              id: "btn-2",
              className: `text-white text-center text-md my-5 ${isActive(
                "paket.index"
              )}`,
              children: /* @__PURE__ */ jsx(Link, { href: route("paket.index"), children: /* @__PURE__ */ jsx("span", { children: "Data Paket Umroh" }) })
            }
          ),
          /* @__PURE__ */ jsxs(
            Dropdownv2,
            {
              title: "Data Motto & Foto Hotel",
              props: `${isActive("motto-section.index") || isActive("hotel.index") ? "true" : "false"}`,
              children: [
                /* @__PURE__ */ jsx(Link, { href: route("motto-section.index"), children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    role: "menuitem",
                    className: `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dropActive(
                      "motto-section.index"
                    )}`,
                    children: /* @__PURE__ */ jsx("span", { children: "Data Motto Umroh" })
                  }
                ) }),
                /* @__PURE__ */ jsx(Link, { href: route("hotel.index"), children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: "btn-5",
                    role: "menuitem",
                    className: `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dropActive(
                      "hotel.index"
                    )}`,
                    children: /* @__PURE__ */ jsx("span", { children: "Data Foto Hotel" })
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: buttonVariants,
              initial: `${isActive("galery.index") ? "" : "initial"}`,
              whileHover: `${isActive("galery.index") ? "" : "hover"}`,
              id: "btn-2",
              className: `text-white text-center text-md my-5 ${isActive(
                "galery.index"
              )}`,
              children: /* @__PURE__ */ jsx(Link, { href: route("galery.index"), children: /* @__PURE__ */ jsx("span", { children: "Data Galerry Umroh" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: buttonVariants,
              initial: `${isActive("tips.index") ? "" : "initial"}`,
              whileHover: `${isActive("tips.index") ? "" : "hover"}`,
              id: "btn-2",
              className: `text-white text-center text-md my-5 ${isActive(
                "tips.index"
              )}`,
              children: /* @__PURE__ */ jsx(Link, { href: route("tips.index"), children: /* @__PURE__ */ jsx("span", { children: "Data Tips Umroh" }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterAdmin, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "m-10 bg-white shadow-md w-fit", children })
  ] }) });
}
const AdminLayout = ({ children }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-fit", children: /* @__PURE__ */ jsx(Sidebar, { children: /* @__PURE__ */ jsx("div", { className: "flex p-4 w-fit", children }) }) }) });
};
const AdminLayout$1 = AdminLayout;
export {
  AdminLayout$1 as default
};
