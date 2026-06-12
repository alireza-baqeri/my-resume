import { useState } from "react";
function Navbar() {

    return (<>
        <nav>
            <div className={"container flex items-center justify-between gap-10 "}>
                <div className={"logo"}>
                    <span className={"border rounded shadow-xl shadow-brand-yellow/75"}>LOGO</span>
                </div>
                <ul className="desktop-menu flex-1 flex justify-center items-center gap-1">
                    <li className="flex-1 text-center border rounded-sm p-2">About</li>
                    <li className="flex-1 text-center border rounded-sm p-2">Skills</li>
                    <li className="flex-1 text-center border rounded-sm p-2">Projects</li>
                    <li className="flex-1 text-center border rounded-sm p-2">Contact</li>
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




