import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <div className="relative bg-neutral-800">
            <nav className="container mx-auto flex items-center p-2 sm:px-8">
                <div className="mr-4 flex items-center p-2 md:mr-14">
                    <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                    <span className="text-xl site-title pt-0.5">TOTK Armor Tracker</span>
                </div>
                <ul className="hidden gap-1 sm:flex">
                    <li className="hidden">
                        <button className="inline-block px-3 py-2 text-left text-lg nav-link" type="button">
                            Feedback
                        </button>
                    </li>
                    {/*<li>*/}
                    {/*    <Link className="inline-block w-full px-3 py-2 text-lg nav-link" href="https://github.com/perrysidler/totk-armor-tracker/issues/new"*/}
                    {/*          target="_blank">*/}
                    {/*        Feedback*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
                <ul className="ml-auto hidden gap-1 sm:flex">
                    <li className="flex hidden">
                        <button className="inline-block px-3 py-2 text-xl" type="button">
                            {/*<BsGearFill />*/}
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                    </li>
                    <li className="flex">
                        <Link className="rounded inline-block px-3 py-2 text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400" href="https://github.com/perrysidler/totk-armor-tracker"
                              target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            {/*<FaGithub />*/}
                        </Link>
                    </li>
                </ul>
                <div className="mr-3 ml-auto sm:hidden">
                    <button className="flex h-8 w-8 items-center justify-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
                        <span className="sr-only">Open menu</span>
                        {!menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 scale-150" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                         ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 scale-150" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                         )}
                    </button>
                </div>
            </nav>
            {menuOpen ? (
                <nav className="absolute top-full left-0 z-20 w-full bg-neutral-700 px-4 py-2 sm:hidden">
                    <ul className="flex flex-col gap-2 text-left">
                        {/*<li>*/}
                        {/*    <Link className={`nav-link inline-block px-3 py-2 text-lg w-full ${router.pathname == "/" ? "active" : ""}`.trim()} href="/">*/}
                        {/*        Armor*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    /!*<button className="inline-block px-3 py-2 text-left text-lg min-w-[12rem]" type="button">*!/*/}
                        {/*    /!*    Materials*!/*/}
                        {/*    /!*</button>*!/*/}
                        {/*    <Link className={`nav-link inline-block px-3 py-2 text-lg w-full ${router.pathname == "/materials" ? "active" : ""}`.trim()} href="/materials">*/}
                        {/*        Materials*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li>
                            {/*<button className="inline-block w-full px-3 py-2 text-lg text-left" type="button">*/}
                            {/*    Feedback*/}
                            {/*</button>*/}
                            <Link className="inline-block w-full px-3 py-2 rounded text-lg nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400" href="https://github.com/perrysidler/totk-armor-tracker/"
                                  target="_blank">
                                GitHub
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
};