import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <div className="bg-neutral-800">
            <nav className="container mx-auto flex items-center py-2">
                <div className="mr-24 flex items-center p-2">
                    <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                    <span className="text-xl site-title pt-0.5">TOTK Armor Tracker</span>
                </div>
                <ul className="ml-auto flex gap-1">
                    <li>
                        <button className="inline-block px-3 py-2 text-xl" type="button">
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                    </li>
                    <li>
                        <Link className="inline-block px-3 py-2 text-xl" href="https://github.com/perrysidler/totk-armor-tracker" target="">
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </li>
                </ul>
                {/*<Link href="/">Armor</Link>*/}
                {/*<Link href="/">Options</Link>*/}
                {/*<a href="https://github.com/perrysidler/totk-armor-tracker" target="_blank">Feedback</a>*/}
            </nav>
        </div>
    );
};