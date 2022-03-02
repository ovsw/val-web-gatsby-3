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

import InnerPageHeader from "../inner-page-header";
import VrBreadcrumbs from "./vr-breadcrumbs";

import VrSidebar from "./vr-sidebar";

const VrLayout = ({ title, section, subSection = "", image, children, breadcrumbs }) => {
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
    <>
      <InnerPageHeader title={title} headerImage={image} />
      <section className="kontainer pt-14">
        <div className=" flex">
          <div className="w-max min-w-[18rem] p-8 pl-0">
            <VrSidebar section={section} subSection={subSection} />
          </div>
          <div className=" flex-1 pt-6 pb-16">
            {/* <h1 className="text-6xl !font-extrabold">{title}</h1> */}

            <div className="mt-2 mb-8">
              <VrBreadcrumbs pages={breadcrumbs} />
            </div>

            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default VrLayout;
