import React, { Fragment } from "react";
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

const DesktopNav = ({ siteNav, showNav, doShowNav, doHideNav }) => {
  return (
    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
      <Popover.Group as="nav" className="flex space-x-10">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-lg font-medium hover:text-gray-900 focus:outline-none "
                )}
              >
                <span>VA Loans</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {/* Submenu Group */}
                    <div className="px-5 py-6 sm:p-8 bg-white">
                      <p className="uppercase text-gray-600 text-sm mb-3 tracking-wider">
                        Types of VA Loans
                      </p>

                      {/* ITEMS MAP */}
                      <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-2">
                        {vaLoans[0].items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 py-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-accent-dark text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* END Group */}

                    {/* Submenu Group */}
                    <div className="px-5 py-6 sm:p-8 bg-gray-100">
                      <p className="uppercase text-gray-600 text-sm mb-3 tracking-wider">
                        VA Loan Info
                      </p>

                      {/* ITEMS MAP */}
                      <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-2">
                        {vaLoans[1].items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* END Group */}

                    {/* Submenu Group */}
                    {/* <div className="p-5 bg-w sm:p-8">
                      <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                        <div className="flex items-center">
                          <div className="text-base font-medium text-gray-900">Enterprise</div>
                          <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-primary-dark">
                            New
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Empower your entire team with even more advanced tools.
                        </p>
                      </a>
                    </div> */}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <a href="#" className=" text-lg font-medium text-gray-500 hover:text-gray-900">
          VA Refinance
        </a>
        <a href="#" className="text-lg font-medium text-gray-500 hover:text-gray-900">
          Mortgage Calculator
        </a>
        <a href="#" className="text-lg font-medium text-gray-500 hover:text-gray-900">
          My Story
        </a>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-lg font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                )}
              >
                <span>Resources</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-2/3 transform -translate-x-1/3 mt-3 px-2 w-screen max-w-md sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                        >
                          <p className="text-lg font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>
      <div className="flex items-center md:ml-12">
        <a href="#" className="text-lg font-medium text-gray-500 hover:text-gray-900">
          Contact
        </a>
        <a
          href="#"
          className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-accent hover:bg-accent-dark"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default DesktopNav;

const vaLoans = [
  {
    text: "Types of VA Loans",
    items: [
      {
        name: "Fixed Rate VA Loan",
        description: "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
      },
      {
        name: "Adjustable Rate VA Loan (ARM)",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorClickIcon,
      },
      {
        name: "VA Jumbo Loan",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: ShieldCheckIcon,
      },
      {
        name: "Home Improvement VA Loan",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ViewGridIcon,
      },
      // {
      //   name: "Automations",
      //   description: "Build strategic funnels that will drive your customers to convert",
      //   href: "#",
      //   icon: RefreshIcon,
      // },
      // {
      //   name: "Reports",
      //   description: "Get detailed reports that will help you make more informed decisions ",
      //   href: "#",
      //   icon: DocumentReportIcon,
      // },
    ],
  },
  {
    text: "VA Loan Info",
    items: [
      {
        name: "VA Loan Eligibility",
        description: "What Are VA Loan Requirements?",
        href: "#",
        icon: ChartBarIcon,
      },
      {
        name: "VA Loan Rates",
        description: "How Do VA Loan Rates Differ?",
        href: "#",
        icon: CursorClickIcon,
      },
      {
        name: "VA Loan Benefits",
        description: "Why Use a VA Home Loan? ",
        href: "#",
        icon: ShieldCheckIcon,
      },
      {
        name: "VA Loan Process",
        description: "A step-by-step guide to buying your own home.",
        href: "#",
        icon: ViewGridIcon,
      },
      {
        name: "VA Loan Checklist",
        description: "A list of critical info you need to provide for your VA loan.",
        href: "#",
        icon: RefreshIcon,
      },
      {
        name: "VA Certificate of Eligibility",
        description: "A confusing but essential step.",
        href: "#",
        icon: DocumentReportIcon,
      },
      {
        name: "VA Loan Apps",
        description: "Learn if you Qualify for a VA Loan within Minutes.",
        href: "#",
        icon: DocumentReportIcon,
      },
    ],
  },
];
const resources = [
  {
    name: "Blog",
    description: "Read helpful articles and guides.",
    href: "#",
  },
  {
    name: "Video",
    description: "Our video library covers the entire Loan Journey.",
    href: "#",
  },
  {
    name: "FAQs",
    description: "Get answers to the most recent questions.",
    href: "#",
  },
  {
    name: "Mortgage Term Glossary",
    description: "Get familiar with the terminology",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
