import { useState } from "react";
function Navbar() {

    return (<>
        <nav>
            <div className={"container"}>
                <div className={"logo"}>
                    LOGO
                </div>
                <ul className={"desktop-menu flex justify-between items-center"}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
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




