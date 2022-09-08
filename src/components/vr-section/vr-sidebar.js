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

const VrSidebar = ({ section, subSection }) => {
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

  const sectionSlug = section.slug.current;
  const subSectionSlug = subSection.slug.current;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="">
      {/* <h1>SECTION: {sectionSlug}</h1>
      <h1>SUB-SECTION: '{subSectionSlug}'</h1>
      ************ */}
      {vrCategories.map(({ node: vrSection }, i) => {
        return (
          <div key={i}>
            {/* if the category being looped is the current one */}
            {sectionSlug === vrSection.slug.current && (
              // show the menu for it in the sidebar

              // title
              <div key={i} className="">
                <Link
                  to={`/video/${vrSection.slug.current}/`}
                  className="px-4 block font-bold text-xl py-3 !bg-primary text-white"
                >
                  {vrSection.title}
                </Link>

                {/* sub-sections START */}
                <div className="shadow-xl">
                  <ul className="font-normal shadow-sm">
                    {vrSection.subSections.map((subSection, i) => {
                      return (
                        <li key={i} className="">
                          <Link
                            to={`/video/${subSection.slug.current}/`}
                            partiallyActive={true}
                            // activeStyle={{ color: "red" }}
                            activeClassName="!bg-accent !text-white"
                            className="block font-bold"
                          >
                            {/* <span className={subSectionSlug == subSection.slug.current ? "hidden" : ""}> */}
                            <span className="pl-4 pr-4 py-3 block text-lg">{subSection.title}</span>
                          </Link>
                          <ul className="divide-y bg-slate-100">
                            {subSection.videoRefs.map((videoPage, i) => {
                              return (
                                <li key={i} className="pl-10 pr-4 py-2">
                                  <Link
                                    activeClassName="activeVrSidebarLink"
                                    to={`/video/${subSection.slug.current}/${videoPage.slug.current}/`}
                                  >
                                    {videoPage.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                          {/* </span> */}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* END sub-sections */}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default VrSidebar;
