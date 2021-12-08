import React, { Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// tailwind ui imports
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
// end tailwind ui imports

// import Icon from './icon'
// import {cn} from '../lib/helpers'

// import MainNav from "./mainNav";
// import MobileNav from "./mobileNav";

import DesktopNav from "./desktop-nav";

const Header = ({ doHideNav, doShowNav, showNav, siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                slug
              }
            }
          }
        }
      }
    `
  );

  const {
    siteMetadata: { siteNav },
  } = site;

  const solutions = [
    {
      name: "Analytics",
      description: "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: ChartBarIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: CursorClickIcon,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: ShieldCheckIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: ViewGridIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will drive your customers to convert",
      href: "#",
      icon: RefreshIcon,
    },
    {
      name: "Reports",
      description: "Get detailed reports that will help you make more informed decisions ",
      href: "#",
      icon: DocumentReportIcon,
    },
  ];
  const resources = [
    {
      name: "Help Center",
      description: "Get all of your questions answered in our forums or contact support.",
      href: "#",
    },
    {
      name: "Guides",
      description: "Learn how to maximize our platform to get the most out of it.",
      href: "#",
    },
    {
      name: "Events",
      description: "See what meet-ups and other events we might be planning near you.",
      href: "#",
    },
    { name: "Security", description: "Understand how we take your privacy seriously.", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="fixed z-50 w-full bg-white">
      <Popover className="relative mx-auto max-w-screen-2xl">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <span className="sr-only">VA Loans For Vets</span>
              <StaticImage
                src="../../images/logo/va-loans-for-vets-logo-light.jpg"
                alt="VA Loans For Vets"
                placeholder="none"
                // className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* HAMBURGER */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* END HEADER BAR */}

          {/* DESKTOP NAV */}
          <DesktopNav
            navStructure={siteNav}
            showNav={showNav}
            doShowNav={doShowNav}
            doHideNav={doHideNav}
          />
          {/* END DESKTOP NAV */}
        </div>
        {/* END DESKTOP */}

        {/* MOBILE MENU */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Enterprise
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
        {/* END MOBILE MENU */}
      </Popover>
    </header>
  );
};

export default Header;
