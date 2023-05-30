import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Sidebar = () => {
    return (
        <div className="fixed w-72 bg-neutral-800 h-full p-6 flex flex-col grow gap-y-5">
            <div className="flex flex-wrap items-center justify-center">
                <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                <span className="site-title text-xl pt-0.5">TOTK Armor Tracker</span>
            </div>
            <div className="flex flex-1 flex-col gap-y-7 flex-grow">
                <div className="mt-auto flex items-center">
                    <a className="w-8 h-8 flex flex-col items-center justify-center mr-auto text-lg"
                       href="https://github.com/perrysidler/totk-armor-tracker" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <button className="p-1 flex items-center justify-center" type="button">
                        <FontAwesomeIcon className="p-1" icon={faGear} />
                        <span className="pl-1">Options</span>
                    </button>
                </div>
            </div>
        </div>
    );
};