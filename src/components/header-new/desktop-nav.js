import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";

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
  QuestionMarkCircleIcon,
  MenuIcon,
  NewspaperIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import DesktopDropdown from "./desktop-dropdown";

const DesktopNav = ({ siteNav, showNav, doShowNav, doHideNav }) => {
  return (
    <div className="hidden xl:flex-1 xl:flex xl:items-center xl:justify-between">
      <Popover.Group as="nav" className="flex space-x-10">
        <DesktopDropdown title="VA Loans" menuItems={vaLoans} />
        {/* <Link
          to="/refinancing/"
          className=" text-lg font-medium text-gray-500 hover:text-gray-900 mainMenuFocusStyles"
          activeClassName="activeMainMenuItemStyles"
          partiallyActive={true}
        >
          VA Refinance
        </Link> */}

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-lg font-medium hover:text-gray-900 mainMenuFocusStyles"
                  // focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                )}
              >
                <span>Refinance</span>
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
                <Popover.Panel className="absolute z-10 left-2/3 transform -translate-x-1/3 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-6 py-6 sm:gap-8 sm:p-8">
                      {refinance.map((item) => (
                        <Link
                          to={item.href}
                          key={item.name}
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                        >
                          <span
                            className="text-lg font-medium text-gray-900 after:content-[attr(after)] after:mt-1 after:text-sm after:text-gray-500 after:block"
                            after={item.description}
                          >
                            {item.name}
                          </span>
                          {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* <Link
          to="/va-loans-closing-costs-calculator/"
          className="text-lg font-medium text-gray-500 hover:text-gray-900 mainMenuFocusStyles"
          activeClassName="activeMainMenuItemStyles"
        >
          Mortgage Calculator
        </Link> */}
        <Link
          to="/location/"
          className="text-lg font-medium text-gray-500 hover:text-gray-900 mainMenuFocusStyles"
          activeClassName="activeMainMenuItemStyles"
        >
          Locations
        </Link>
        <Link
          to="/my-story/"
          className="text-lg font-medium text-gray-500 hover:text-gray-900 mainMenuFocusStyles"
          activeClassName="activeMainMenuItemStyles"
        >
          My Story
        </Link>

        <DesktopDropdown title="Resources" menuItems={resources} narrow={true} />
      </Popover.Group>
      <div className="flex items-center md:ml-12">
        <Link to="/contact-me/" className="text-lg font-medium text-gray-500 hover:text-gray-900">
          Contact
        </Link>
        <a
          href="https://myfw.mymortgage-online.com/JimmyVercellino.html"
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
      // {
      //   name: "Fixed Rate VA Loan",
      //   description: "Maximum interest deduction for taxes, but more interest overall.",
      //   href: "/types-of-loans/",
      //   icon: HeartIcon,
      // },
      // {
      //   name: "Adjustable Rate VA Loan (ARM)",
      //   description: "Lower starting rate, but loan balance due can change long term.",
      //   href: "/types-of-loans/",
      //   icon: AdjustmentsIcon,
      // },
      {
        name: "VA Jumbo Loan",
        description: "A non-conforming loan, for an amount that exceeds conventional loan limits.",
        href: "/va-jumbo-loans/",
        icon: ViewGridIcon,
      },
      {
        name: "Home Improvement VA Loan",
        description: "All about VA guaranteed home loans available for home improvements.",
        href: "/home-improvements-va-loan/",
        icon: HomeIcon,
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
        href: "/va-loan-eligibility/",
        icon: BadgeCheckIcon,
      },
      {
        name: "VA Loan Rates",
        description: "How Do VA Loan Rates Differ?",
        href: "/va-loan-rates-differ/",
        icon: CurrencyDollarIcon,
      },
      {
        name: "VA Loan Benefits",
        description: "Why Use a VA Home Loan? ",
        href: "/2020-va-loan-benefits/",
        icon: ShieldCheckIcon,
      },
      {
        name: "VA Loan Process",
        description: "A step-by-step guide to buying your own home.",
        href: "/va-loan-process/",
        icon: ChartBarIcon,
      },
      {
        name: "VA Loan Checklist",
        description: "A list of critical info you need to provide for your VA loan.",
        href: "/loan-checklist/",
        icon: ClipboardListIcon,
      },
      {
        name: "VA Certificate of Eligibility",
        description: "A confusing but essential step.",
        href: "/va-loan-certificate-of-eligibility/",
        icon: DocumentTextIcon,
      },
      {
        name: "VA Loan Apps",
        description: "Learn if you Qualify for a VA Loan within Minutes.",
        href: "/va-loan-app-free-mobile-tool/",
        icon: DesktopComputerIcon,
      },
    ],
  },
];
const resources = [
  {
    text: "Video Resources",
    items: [
      {
        name: "All About VA Loans",
        description: "Videos on everyhting you need so you can apply with confidence.",
        // description: "We educate you on everything related to VA Loans so you can apply with confidence. Work with an experienced lender on a home loan made just for active-duty service members and veterans.",
        href: "/video/all-about-va-loans/",
        icon: AcademicCapIcon,
      },
      // {
      //   name: "Our VA Loan Journey",
      //   description: "Video series showcasing the entire journey from start to finish.",
      //   // description: "Jimmy Vercellino and his veteran-run team serve you from the application to closing. Watch our personalized loan journey to see how we’ll get you and your partner into the home you’ve always wanted.",
      //   href: "/video/our-va-loan-journey/",
      //   icon: ChartBarIcon,
      // },
    ],
  },
  {
    text: "Written Resources",
    items: [
      {
        name: "Our Blog",
        description: "Helpful articles and guides.",
        href: "/blog/",
        icon: NewspaperIcon,
      },
      {
        name: "FAQs",
        description: "Answers to your most important questions.",
        href: "/va-post-loan-faq/",
        icon: QuestionMarkCircleIcon,
      },
      {
        name: "VA Loans Term Glossary",
        description: "Get familiar with the technology.",
        href: "/mortgage-terms-glossary/",
        icon: ClipboardListIcon,
      },
    ],
  },
];

const refinance = [
  {
    name: "Cash Out Refinance",
    description: "See how you can refinance to pull cash out of your home.",
    // description: "We educate you on everything related to VA Loans so you can apply with confidence. Work with an experienced lender on a home loan made just for active-duty service members and veterans.",
    href: "/va-loan-cash-out-refinance-what-you-need-to-know/",
    icon: AcademicCapIcon,
  },
  {
    name: "Streamline Refinance",
    description: "Learn how you can lower the rate on your existing mortgage.",
    // description: "Jimmy Vercellino and his veteran-run team serve you from the application to closing. Watch our personalized loan journey to see how we’ll get you and your partner into the home you’ve always wanted.",
    href: "/arizona-va-streamline-refinance/",
    icon: ChartBarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
