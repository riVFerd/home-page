import React, {useRef, useState} from "react";
import Select from 'react-select';
import {SiMicrosoftbing} from "react-icons/si";
import {FcGoogle,FcStart} from "react-icons/fc";
import {ImSearch} from "react-icons/im";

const engines = [
    {
        label: <SiMicrosoftbing/>,
        value: 'https://www.bing.com/search?q=',
    },
    {
        label: <FcGoogle/>,
        value: 'https://www.google.com/search?q=',
    },
    {
        label: <FcStart/>,
        value: 'https://www.youtube.com/results?search_query=',
    }
];

// Get history from localStorage
const getHistory = () => JSON.parse(localStorage.getItem('history'));

const SearchBox = (props) => {
    const [input, setInput] = useState('');
    const selectRef = useRef(null);

    const handleInputChange = (event) => setInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim().length === 0) return;
        if (getHistory() === null) {
            localStorage.setItem('history', JSON.stringify([input.toLowerCase()]));
        } else {
            localStorage.setItem('history', JSON.stringify([input.toLowerCase(), ...getHistory()]));
        }
        window.location.href = `${selectRef.current.state.selectValue[0].value + input.replace(/\s+/g, "+")}`;
    }

    // This function made because for some reason the onSubmit on form doesn't want to triggered by enter button
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            // If Enter key is pressed
            handleSubmit(event);
        }
    };

    const showSuggestion = () => {
        if (getHistory() != null && input !== '') {
            let counter = 0;
            let list = [];
            for(let index = 0; index < getHistory().length; index++) {
                if (counter > 5) break;
                if (getHistory()[index].includes(input.toLowerCase()) || input === ' ') {
                    list.push(<li className='cursor-pointer' key={index}
                                  onClick={setInput.bind(this, getHistory()[index])}>{getHistory()[index]}</li>);
                    counter++;
                }
            }
            if (counter > 0) list.push(<li key={99} className='cursor-pointer text-red-500' onClick={() => {
                localStorage.setItem('history', null)
                setInput('')
            }}>Clear history</li>);
            return <>{list}</>;
        }
    }

    const formatOptionLabel = (data, isSelected) => (
        (!(isSelected.selectValue[0].value === data.value))
            ? <a className={'flex justify-center text-[#0000ff]'}>{data.label}</a>
            : <a href={data.value} className={'flex justify-center text-[#0000ff]'}>
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
        <div id={props.id} className={props.className}>
            <form onSubmit={handleSubmit} className={'flex justify-around'}>
                <Select className={'2/12'} ref={selectRef} defaultValue={engines[0]} options={engines}
                        formatOptionLabel={formatOptionLabel} styles={selectStyle} isSearchable={false}/>
                <span className={'flex flex-col items-center justify-between rounded mx-0 w-10/12 bg-[#3b3b3b]'}>
                    <div id="search-input" className='flex items-center justify-between rounded w-full bg-[#3b3b3b]'>
                        <input type="text" className={'focus:outline-none w-11/12 rounded px-4 py-2 bg-accent-gray text-white'}
                               placeholder="Search..." onChange={handleInputChange} onKeyDown={handleKeyDown}
                               value={input}
                               autoFocus={true}/>
                        <button type={'submit'} className={'flex items-center pr-4 text-white'}>
                            <ImSearch/>
                        </button>
                    </div>
                    <div className="history">
                        <ul className='absolute bg-[#3b3b3b] w-10/12 -translate-x-1/2 -translate-y-2 text-white'>
                            {
                                showSuggestion()
                            }
                        </ul>
                    </div>
                </span>
            </form>
        </div>
    )
}

export default SearchBox;