import {useRef, useState} from "react";
import Select from 'react-select';
import {SiMicrosoftbing} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";
import {ImSearch} from "react-icons/im";

const engines = [
    {
        label: <SiMicrosoftbing/>,
        value: 'https://www.bing.com/search?q=',
    },
    {
        label: <FcGoogle/>,
        value: 'https://www.google.com/search?q=',
    }
];

const SearchBox = (props) => {
    const [input, setInput] = useState('');
    const selectRef = useRef(null);

    const handleInputChange = (event) => setInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submited');
        window.location.href = `${selectRef.current.state.selectValue[0].value + input.replace(/\s+/g, "+")}`;
    }

    // This function made because for some reason the onSubmit on form doesn't want to triggered by enter button
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            // If Enter key is pressed
            handleSubmit(event);
        }
    };

    const formatOptionLabel = (data, isSelected) => (
        (!(isSelected.selectValue[0].value === data.value))
            ? <a className={'flex justify-center'}>{data.label}</a>
            : <a href={data.value} className={'flex justify-center'}>
                {data.label}
            </a>
    );

    // style for react-select
    const selectStyle = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: '#e3e3e3',
            borderColor: '',
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? '#000' : '#aaa',
            '&:hover': {
                color: '#000'
            }
        })
    };

    return (
        <div id={props.id} className="w-[40rem]">
            <form onSubmit={handleSubmit} className={'flex justify-center'}>
                <Select ref={selectRef} defaultValue={engines[0]} options={engines}
                        formatOptionLabel={formatOptionLabel} styles={selectStyle} isSearchable={false}/>
                <span className={'flex items-center justify-between rounded mx-2 w-9/12 bg-[#3b3b3b]'}>
                    <input type="text" className={'focus:outline-none w-11/12 rounded px-4 py-2'}
                           placeholder="Search..." onChange={handleInputChange} onKeyDown={handleKeyDown} value={input}
                           autoFocus={true}/>
                    <button type={'submit'} className={'flex items-center pr-4'}>
                        <ImSearch/>
                    </button>
                </span>
            </form>
        </div>
    )
}

export default SearchBox;