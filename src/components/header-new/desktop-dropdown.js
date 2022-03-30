import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DesktopDropdown = ({ title, menuItems, narrow = false }) => {
  const dynamicColumnNo = narrow ? "" : "lg:grid-cols-2";
  const dynamicWrapperWidth = narrow ? "max-w-md" : "max-w-md lg:max-w-3xl";

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-lg font-medium hover:text-gray-900 mainMenuFocusStyles"
            )}
          >
            <span>{title}</span>
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
            <Popover.Panel
              className={`absolute z-10 -ml-4 mt-3 transform w-screen ${dynamicWrapperWidth}`}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                {/* Submenu Group */}
                <div className="px-5 py-6 sm:p-8 bg-white">
                  <p className="uppercase text-gray-600 text-sm mb-3 tracking-wider">
                    {menuItems[0].text}
                  </p>

                  {/* ITEMS MAP */}
                  <div className={`relative grid gap-6 sm:gap-8 ${dynamicColumnNo}`}>
                    {menuItems[0].items.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className="-m-3 py-3 px-3 flex items-start rounded-lg hover:bg-gray-100 hover:no-underline group"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-accent-dark text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span
                          className="ml-3 after:content-[attr(after)] after:block after:text-sm after:text-gray-500 after:mt-1"
                          after={item.description}
                        >
                          <div className="text-base font-medium text-gray-900 group-hover:text-accent-dark group-hover:underline">
                            {item.name}
                          </div>
                          {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* END Group */}

                {/* Submenu Group */}
                <div className="px-5 py-6 sm:p-8 bg-gray-100">
                  <p className="uppercase text-gray-600 text-sm mb-3 tracking-wider">
                    {menuItems[1].text}
                  </p>

                  {/* ITEMS MAP */}
                  <div className={`relative grid gap-6 sm:gap-8 ${dynamicColumnNo}`}>
                    {menuItems[1].items.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-white group hover:no-underline"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-light text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span
                          className="ml-4 after:content-[attr(after)] after:block after:text-sm after:mt-1 after:group-hover:!text-gray-700"
                          after={item.description}
                        >
                          <span className="text-base font-medium text-gray-900 group-hover:text-accent-dark group-hover:underline ">
                            {item.name}
                          </span>
                          {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                        </span>
                      </Link>
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
  );
};

export default DesktopDropdown;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
