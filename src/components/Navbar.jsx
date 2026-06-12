import { useState } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {

    const [open, setOpen] = useState(false);

    const links = ["Home", "About", "Projects", "Contact"];
    return (<>

            <nav className="border-b">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="relative flex items-center justify-between h-16">

                        {/* Logo */}
                        <div className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0">
                            <h1 className="text-2xl font-bold">LOGO</h1>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-8 ml-auto">
                            {links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="hover:text-blue-600 transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Button */}
                        <button
                            className="ml-auto md:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {open && (
                        <div className="md:hidden py-4">
                            <ul className="flex flex-col gap-4 text-center">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="block py-2 hover:text-blue-600"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>


        </>
        );
        }

        export default Navbar;




