// import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Skills', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




export default function Navbar() {

    return (
        <Disclosure
            as="nav"
            className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px   "
        >
            <div className="mx-auto max-w-2xl rounded-b-md bg-brand-drakyellow px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/*My Logo*/}
                        <div className="flex shrink-0 items-center">

                            <img
                                alt="Alireza Bagheri Logo - Personal Website"
                                src="src/assets/AB-Logo.png"
                                className="h-9 w-auto rounded-xl border-amber-50 border-3  "
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute gap-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <a href=""><img className={"w-auto h-8"} src="src/assets/github.svg" alt="github"/></a>
                        <a href=""><img className={"w-auto h-8"} src="src/assets/linkedin.svg" alt="linkedin"/></a>

                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
        }



// <nav className={"border-b pb-5 "}>
//     <div className={"container flex items-center justify-between gap-10 pt-3"}>
//         <div className={"logo"}>
//             <span className={"border rounded shadow-xl shadow-brand-yellow/75"}>LOGO</span>
//         </div>
//
//         {/*<ul className="desktop-menu grid grid-cols-4 gap-4 ">*/}
//         {/*    <li className="border rounded-sm p-2 text-center">About</li>*/}
//         {/*    <li className="border rounded-sm p-2 text-center">Skills</li>*/}
//         {/*    <li className="border rounded-sm p-2 text-center">Projects</li>*/}
//         {/*    <li className="border rounded-sm p-2 text-center">Contact</li>*/}
//         {/*</ul>*/}
//
//     </div>
// </nav>



