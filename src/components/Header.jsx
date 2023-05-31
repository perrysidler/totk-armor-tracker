import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
                    <li>
                        <button className="inline-block px-3 py-2 text-xl" type="button">
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                    </li>
                    <li>
                        <Link className="inline-block px-3 py-2 text-xl" href="https://github.com/perrysidler/totk-armor-tracker" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden ml-auto mr-3">
                    <button className="flex items-center justify-center w-8 h-8" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
                        <span className="sr-only">Open menu</span>
                        {!menuOpen ? (
                            <FontAwesomeIcon icon={faBars} className="mt-1 text-4xl" aria-hidden="true" />
                        ) : (
                            <FontAwesomeIcon icon={faXmark} className="mx-auto mt-1 text-4xl" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>
            {menuOpen ? (
                <nav className="top-full bg-neutral-700 container absolute left-0 z-20 p-2">
                    <ul className="flex flex-col gap-2 text-left">
                        <li>
                            <button className="inline-block px-3 py-2 text-left text-lg min-w-[12rem]" type="button">
                                Temporary Button
                            </button>
                        </li>
                        <li>
                            <Link className="inline-block px-3 py-2 text-lg" href="https://github.com/perrysidler/totk-armor-tracker" target="_blank">
                                Feedback
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
};