import { cloneElement, useState } from "react";
import { autoUpdate, flip, offset, shift } from "@floating-ui/dom";
import { useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from "@floating-ui/react";
import { motion } from "framer-motion";

interface ITooltipProps {
    children: any,
    text: string,
}

export const Tooltip = ({ children, text }: ITooltipProps) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "left",
        middleware: [ offset(10), flip(), shift() ],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, { move: false });
    const focus = useFocus(context, { keyboardOnly: true });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    return (
        <div className="relative flex items-center">
            {cloneElement(
                children,
                getReferenceProps({ ref: refs.setReference, ...children.props })
            )}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.2 }}
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className="whitespace-nowrap rounded-sm bg-neutral-700 text-sm text-gray-100 px-1.5 py-0.5"
                >
                    {text}
                </motion.div>
            )}
        </div>
    );
};