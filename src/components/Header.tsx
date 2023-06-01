import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsGearFill } from "react-icons/bs";

export const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <div className="bg-neutral-800 relative">
            <nav className="sm:px-8 container flex items-center p-2 mx-auto">
                <div className="xs:mr-24 flex items-center p-2">
                    <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                    <span className="text-xl site-title pt-0.5">TOTK Armor Tracker</span>
                </div>
                <ul className="sm:flex hidden gap-1 ml-auto">
                    <li className="flex">
                        <button className="inline-block px-3 py-2 text-xl" type="button">
                            <BsGearFill />
                        </button>
                    </li>
                    <li className="flex">
                        <Link className="inline-block px-3 py-2 text-xl" href="https://github.com/perrysidler/totk-armor-tracker"
                              target="_blank">
                            <FaGithub />
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden ml-auto mr-3">
                    <button className="flex items-center justify-center w-8 h-8" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
                        <span className="sr-only">Open menu</span>
                        {!menuOpen ? (
                            <FaBars className="mt-1 text-4xl" aria-hidden="true" />
                        ) : (
                            <IoClose className="mx-auto mt-1 text-4xl" aria-hidden="true" />
                         )}
                    </button>
                </div>
            </nav>
            {menuOpen ? (
                <nav className="top-full bg-neutral-700 container absolute left-0 z-20 p-2 sm:hidden">
                    <ul className="flex flex-col gap-2 text-left">
                        <li>
                            <button className="inline-block px-3 py-2 text-left text-lg min-w-[12rem]" type="button">
                                Temporary Button
                            </button>
                        </li>
                        <li>
                            <Link className="inline-block px-3 py-2 text-lg" href="https://github.com/perrysidler/totk-armor-tracker"
                                  target="_blank">
                                Feedback
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
};