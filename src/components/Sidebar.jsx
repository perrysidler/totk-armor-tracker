import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Sidebar = () => {
    return (
        <div className="fixed flex h-full w-72 grow flex-col gap-y-5 bg-neutral-800 p-6">
            <div className="flex flex-wrap items-center justify-center">
                <Image className="mr-4" src="/triforce-crest.svg" width="56" height="56" alt="Triforce Crest" />
                <span className="text-xl site-title pt-0.5">TOTK Armor Tracker</span>
            </div>
            <div className="flex flex-1 flex-grow flex-col gap-y-7">
                <div className="mt-auto flex items-center">
                    <a className="mr-auto flex h-8 w-8 flex-col items-center justify-center text-lg"
                       href="https://github.com/perrysidler/totk-armor-tracker" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <button className="flex items-center justify-center p-1" type="button">
                        <FontAwesomeIcon className="p-1" icon={faGear} />
                        <span className="pl-1">Options</span>
                    </button>
                </div>
            </div>
        </div>
    );
};