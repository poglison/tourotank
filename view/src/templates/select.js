import React, { useState } from 'react';


export default function Select (props) {
    const [selectedValue, setSelectedValue] = useState(props.options[0].value);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (option) => {
        setSelectedValue(option.value);
        setIsOpen(false);
    };

    return (
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full border dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600"
                >
                    {selectedValue}
                </button>
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:text-stone-300 dark:bg-stone-950 border dark:border-stone-900 rounded-lg shadow-lg">
                        {props.options.map((option, index) => (
                            <div
                                key={option.value}
                                onClick={() => handleClick(option)}
                                className={"cursor-pointer border-b dark:border-stone-900 p-3 px-4 hover:bg-stone-100 dark:hover:bg-stone-900 " + (index === 0 ? "rounded-t-md" : "") + (index === props.options.length - 1 ? "rounded-b-md !border-b-0" : "")}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
    );
};