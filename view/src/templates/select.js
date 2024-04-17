import React, { useEffect, useState } from 'react';


export default function Select(props) {
    const [options, setOptions] = useState(props.options);
    const [selectedLabel, setSelectedLabel] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setOptions(props.options);
    }, [props.options]);

    useEffect(() => {
        handleClick(props.option);
    }, []);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    useEffect(() => {
        props.setIsOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        props.onChange(selectedValue);
    }, [selectedValue]);

    const handleClick = (option) => {
        setSelectedLabel(option.label);
        setSelectedValue(option.value);
        setIsOpen(false);
    };


    const handle = (e) => {
        setIsOpen(true);
        setSelectedLabel(e.target.value);

        if (e.target.value !== "") {

            setOptions(props.options.filter(option => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
        } else {
            setOptions(props.options);
        }
    }


    return (
        <div className="relative" onClick={() => setIsOpen(!isOpen)}>

            <div onClick={() => setIsOpen(!isOpen)} className='absolute w-full h-full'></div>
            <input
                placeholder="N/A"
                className="flex w-full border dark:border-stone-700 p-2 px-4 rounded-xl dark:bg-stone-850 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600"
                onChange={(e) => handle(e)}
                value={selectedLabel}
                disabled={props.disabled}
            >
            </input>

            {props.selected &&
                <div className='absolute top-3 right-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            }


            {(isOpen && options.length > 0) && (
                <div className={"absolute overflow-auto z-10 mt-2 w-full bg-white dark:text-stone-300 dark:bg-stone-850 border dark:border-stone-700 rounded-lg rounded-tr-sm rounded-br-sm shadow-lg " + (options.length > 5 ? "h-56" : "h-auto")}>
                    {options.map((option, index) => (

                        <div
                            key={option.label}
                            onClick={() => handleClick(option)}
                            className={"flex items-center cursor-pointer border-b dark:border-stone-700 p-3 px-4 hover:bg-stone-100 dark:hover:bg-stone-900 " + (index === 0 ? "rounded-t-md" : "") + (index === options.length - 1 ? "rounded-b-md !border-b-0" : "")}
                        >
                            {option.image && <img src={option.image} alt='Imagem da categoria' className="w-8 h-8 mr-2 rounded-md" />}
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};