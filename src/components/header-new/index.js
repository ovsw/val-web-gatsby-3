import React, { Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// tailwind ui imports
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  AdjustmentsIcon,
  BadgeCheckIcon,
  ChartBarIcon,
  ClipboardListIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  DocumentReportIcon,
  DocumentTextIcon,
  HeartIcon,
  HomeIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  MenuIcon,
  NewspaperIcon,
  RefreshIcon,
  PlayIcon,
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <Popover className="relative mx-auto max-w-screen-xl">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 xl:justify-start md:space-x-10">
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
          <div className="-mr-2 -my-2 xl:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent mr-2">
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
            className="absolute top-0 inset-x-0 transition transform origin-top-right xl:hidden max-w-[100vw]"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-4 pb-6 px-4">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <StaticImage
                      src="../../images/logo/va-loans-for-vets-logo-light.jpg"
                      alt="VA Loans For Vets"
                      placeholder="none"
                      // className="h-8 w-auto sm:h-10"
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {mobileMainItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Enterprise
                  </a> */}
                  {mobileLowerItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="https://connect.valoansforvets.com/"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent"
                  >
                    Apply
                  </a>
                  {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-accent hover:text-accent">
                      Sign in
                    </a>
                  </p> */}
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

const mobileMainItems = [
  // {
  //   name: "Fixed Rate VA Loan",
  //   description: "Maximum interest deduction for taxes, but more interest overall.",
  //   href: "/types-of-loans/",
  //   icon: LocationMarkerIcon,
  // },
  // {
  //   name: "Adjustable Rate VA Loan (ARM)",
  //   description: "Lower starting rate, but loan balance due can change long term.",
  //   href: "/types-of-loans/",
  //   icon: AdjustmentsIcon,
  // },
  {
    name: "VA Loans",
    description: "All you need to know about VA Loans.",
    href: "/va-loans/",
    icon: HomeIcon,
  },
  {
    name: "VA Jumbo Loan",
    description: "A non-conforming loan, for an amount that exceeds conventional loan limits.",
    href: "/va-jumbo-loans/",
    icon: ViewGridIcon,
  },
  {
    name: "VA Refinance",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "/refinancing/",
    icon: RefreshIcon,
  },
  {
    name: "VA Loan Eligibility",
    description: "What Are VA Loan Requirements?",
    href: "/va-loan-eligibility/",
    icon: BadgeCheckIcon,
  },
  {
    name: "VA Loan Process",
    description: "Step-by-Step Guide to Buying Your Own Home.",
    href: "/va-loan-process/",
    icon: ChartBarIcon,
  },
  // {
  //   name: "Video Resources",
  //   description: "Get all of your questions answered in our forums or contact support.",
  //   href: "/video/",
  //   icon: PlayIcon,
  // },
];
const mobileLowerItems = [
  {
    name: "FAQs",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "/faqs/",
  },
  {
    name: "Blog",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "/blog/",
  },
  {
    name: "My Story",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "/my-story/",
  },
  // {
  //   name: "Mortgage Calculator",
  //   description: "See what meet-ups and other events we might be planning near you.",
  //   href: "/va-loans-closing-costs-calculator/",
  // },

  {
    name: "Contact",
    description: "Understand how we take your privacy seriously.",
    href: "/contact-me/",
  },
];
