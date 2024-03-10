import React, { useEffect, useState } from 'react';


export default function Select(props) {
    const [options, setOptions] = useState(props.options);
    const [selectedValue, setSelectedValue] = useState("Não selecionado");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    useEffect(() => {
        props.setIsOpen(isOpen);
    }, [isOpen]);

    const handleClick = (option) => {
        setSelectedValue(option.label);
        setIsOpen(false);
    };


    const handle = (e) => {
        setIsOpen(true);
        setSelectedValue(e.target.value);
        if (e.target.value !== "") {
            setOptions(props.options.filter(option => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
        } else {
            setOptions(props.options);
        }
    }

    return (
        <div className="relative">
            <input
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full border dark:border-stone-700 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600"
                onChange={(e) => handle(e)}
                value={selectedValue}
            >

            </input>
            {isOpen && (
                <div className="absolute h-56 overflow-auto z-10 w-full mt-1 bg-white dark:text-stone-300 dark:bg-stone-950 border dark:border-stone-700 rounded-lg shadow-lg">
                    {options.map((option, index) => (

                        <div
                            key={option.label}
                            onClick={() => handleClick(option)}
                            className={"flex items-center cursor-pointer border-b dark:border-stone-700 p-3 px-4 hover:bg-stone-100 dark:hover:bg-stone-900 " + (index === 0 ? "rounded-t-md" : "") + (index === options.length - 1 ? "rounded-b-md !border-b-0" : "")}
                        >
                            {option.image && <img src={option.image} className="w-8 h-8 mr-2 rounded-md" />}
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};