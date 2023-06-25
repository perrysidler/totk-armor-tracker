import { Switch } from "@headlessui/react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface IToggleProps {
    value: boolean,
    onObtainedChange: (next: boolean) => void,
}

export const Toggle = ({ onObtainedChange, value }: IToggleProps) => {
    return (
        <Switch
            checked={value}
            onChange={onObtainedChange}
            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={classNames(
                    value ? "bg-[#b99f65]" : "bg-neutral-400",
                    "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                )}
            />
            <span
                aria-hidden="true"
                className={classNames(
                    value ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border-0 border-neutral-800 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
                )}
            />
        </Switch>
    )
}
