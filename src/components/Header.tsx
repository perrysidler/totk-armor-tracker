import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { FaBars, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const router = useRouter();
    return (
        <div className="relative bg-neutral-800">
            <nav className="container mx-auto flex items-center p-2 sm:px-8">
                <div className="mr-4 flex items-center p-2 md:mr-14">
                    <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                    <span className="text-xl site-title pt-0.5">TOTK Armor Tracker</span>
                </div>
                <ul className="hidden gap-1 sm:flex">
                    <li>
                        <button className="inline-block px-3 py-2 text-left text-lg nav-link" type="button">
                            Materials
                        </button>
                    </li>
                    <li>
                        <Link className="inline-block w-full px-3 py-2 text-lg nav-link" href="https://github.com/perrysidler/totk-armor-tracker/issues/new"
                              target="_blank">
                            Feedback
                        </Link>
                    </li>
                </ul>
                <ul className="ml-auto hidden gap-1 sm:flex">
                    <li className="flex hidden">
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
                <div className="mr-3 ml-auto sm:hidden">
                    <button className="flex h-8 w-8 items-center justify-center" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
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
                <nav className="absolute top-full left-0 z-20 w-full bg-neutral-700 px-4 py-2 sm:hidden">
                    <ul className="flex flex-col gap-2 text-left">
                        <li>
                            <Link className={`nav-link inline-block px-3 py-2 text-lg w-full ${router.pathname == "/" ? "active" : ""}`.trim()} href="/">
                                Armor
                            </Link>
                        </li>
                        <li>
                            {/*<button className="inline-block px-3 py-2 text-left text-lg min-w-[12rem]" type="button">*/}
                            {/*    Materials*/}
                            {/*</button>*/}
                            <Link className={`nav-link inline-block px-3 py-2 text-lg w-full ${router.pathname == "/materials" ? "active" : ""}`.trim()} href="/materials">
                                Materials
                            </Link>
                        </li>
                        <li>
                            <Link className="inline-block w-full px-3 py-2 text-lg nav-link" href="https://github.com/perrysidler/totk-armor-tracker/issues/new"
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