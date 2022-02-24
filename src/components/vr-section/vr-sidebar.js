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

const VrSidebar = ({ sectionSlug, subSectionSlug }) => {
  const { allSanityVrSection } = useStaticQuery(
    graphql`
      query VrNavQuery {
        allSanityVrSection {
          edges {
            node {
              id
              seoNoIndex
              title
              slug {
                current
              }
              subSections {
                id
                seoNoIndex
                title
                slug {
                  current
                }
                videoRefs {
                  id
                  seoNoIndex
                  title
                  slug {
                    current
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const vrCategories = allSanityVrSection.edges;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="space-y-10 divide-y-reverse">
      <h1>SECTION: {sectionSlug}</h1>
      <h1>SUB-SECTION: '{subSectionSlug}'</h1>
      ************
      {vrCategories.map(({ node: category }, i) => {
        return (
          <div key={i} className=" font-bold">
            <Link to={`/video/${category.slug.current}`}>{category.title}</Link>
            <ul className="divide-y font-normal">
              {category.subSections.map((subSection, i) => {
                return (
                  <li key={i} className="pl-4 py-3">
                    <Link
                      to={`/video/${subSection.slug.current}`}
                      partiallyActive={true}
                      // activeStyle={{ color: "red" }}
                      activeClassName="activeVrSidebarLink"
                      className="text-blue-500"
                    >
                      {/* <span className={subSectionSlug == subSection.slug.current ? "hidden" : ""}> */}
                      {subSection.title}
                      {/* </span> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default VrSidebar;
