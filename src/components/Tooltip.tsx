import { MouseEvent, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

interface ITooltipProps {
    children: any,
    parentClasses?: string,
    text: string,
    tooltipClasses?: string,
}

export const Tooltip = ({ children, parentClasses, text, tooltipClasses }: ITooltipProps) => {
    const [ hideTooltip, setHideTooltip ] = useState(false);

    const timerRef = useRef({
        timer: setTimeout(() => {
        })
    });

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current.timer);
        };
    }, []);

    const beginHover = (e: MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            return;
        }
        clearTimeout(timerRef.current.timer);
        timerRef.current.timer = setTimeout(() => {
            setHideTooltip(true);
        }, 1000);
    };
    const endHover = (e: MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            return;
        }
        setHideTooltip(false);
    };

    return (
        <div className={`relative flex items-center group ${parentClasses}`.trim()}
             onMouseEnter={beginHover}
             onMouseLeave={endHover}
        >
            {children}
            <span>{text}</span>
        </div>
    );
};