
interface PropsDropdown {
    dropdownLabel: string;
    name: string;
    onSelect: (value: string) => void;
    defaultValue?: string;
    choices: {
        value: string;
        label: string;
    }[];
}
export default function Dropdown(
    { dropdownLabel, name, onSelect, defaultValue, choices }: PropsDropdown
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
                defaultValue={defaultValue}
            >
            {
                choices.map(
                    ({value, label}) => (
                        <option
                            value = {value}
                            key = {"dropselect-" + value}
                        >
                            {label}
                        </option>
                    )
                )
            }
            </select>
        </>
    );
}