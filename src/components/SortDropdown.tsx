
import { useState } from 'react';


interface PropsDropSelect {
    value: string;
    children: string;
}
export function DropSelect(
    { value, children}: PropsDropSelect
) {
    return (
        <option
            value = {value}
        >
            {children}
        </option>
    )
}

interface PropsDropdown {
    dropdownLabel: string;
    name: string;
    onSelect: (value: string) => void;
    choices: {
        value: string;
        label: string;
    }[];
}
export default function Dropdown(
    { dropdownLabel, name, onSelect, choices }: PropsDropdown
) {

    return (
        <>
            <label
                htmlFor = {name}
            >
                {dropdownLabel}
            </label>
            <select
                name = {name}
                onChange = { (event) => {
                    onSelect(event.target.value);
                } }
            >
            {
                choices.map(
                    ({value, label}) => (
                        <DropSelect
                            value = {value}
                            key = {"dropselect-" + value}
                        >
                            {label}
                        </DropSelect>
                    )
                )
            }
            </select>
        </>
    );
}