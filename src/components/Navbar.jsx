import { useState } from "react";
function Navbar() {

    return (<>
        <nav>
            <div className={"container flex items-center justify-between gap-10 "}>
                <div className={"logo"}>
                    <span className={"border rounded shadow-xl shadow-brand-yellow/75"}>LOGO</span>
                </div>

                <ul className="desktop-menu grid grid-cols-4 gap-4 mt-3 ">
                    <li className="border rounded-sm p-2 text-center">About</li>
                    <li className="border rounded-sm p-2 text-center">Skills</li>
                    <li className="border rounded-sm p-2 text-center">Projects</li>
                    <li className="border rounded-sm p-2 text-center">Contact</li>
                </ul>

                <div className={"actions"}>
                    Theme
                    Hamburger
                </div>
            </div>
        </nav>

        </>
        );
        }

        export default Navbar;




