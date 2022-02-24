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

import VrSidebar from "./vr-sidebar";

const VrLayout = ({ title, sectionSlug, subSectionSlug = "", image, children }) => {
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

      <section className="mx-auto max-w-[94rem] flex">
        <div className=" w-max p-8">
          <VrSidebar sectionSlug={sectionSlug} subSectionSlug={subSectionSlug} />
        </div>
        <div className=" flex-1">{children}</div>
      </section>
    </>
  );
};

export default VrLayout;
