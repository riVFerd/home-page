import './App.css'
import DateAndClock from "./components/DateAndClock.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Weather from "./components/Weather.jsx";
import Notes from "./components/Notes.jsx";
import {useEffect, useState} from "react";
import {FcSettings} from "react-icons/fc";
import TopSites from "./components/TopSites.jsx";
import ToggleDarkMode from "./components/ToggleDarkMode.jsx";
import reactLogo from "./assets/react.svg";
import {gsap} from "gsap";

function App() {
    const [isSettingsMode, setIsSettingsMode] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || 'User');

    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value);
        alert('Settings submitted!');
    }

    useEffect(() => {
        gsap.to("#logo", {duration: 3 , rotation: "+=360", repeat: -1, ease: "linear",});
    }, [isSettingsMode]);

    if (isSettingsMode) return (
        <div className='flex flex-col justify-center items-center gap-4 h-screen dark:text-white'>
            <img src={reactLogo} alt="" id='logo' className='w-20'/>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <form onSubmit={handleSettingsSubmit} className='flex flex-col gap-4'>
                <input type="text" className='p-2 rounded-xl text-black dark:text-white dark:bg-accent-gray' placeholder='Enter new username...'/>
                <button type="submit" className='p-2 rounded-xl bg-gray-600'>Submit</button>
            </form>
            <button onClick={() => setIsSettingsMode(false)}>Back</button>
        </div>
    )

    return (
        <div className='row flex justify-center items-center gap-4 px-12 h-screen'>
            <div className="col flex flex-col justify-between items-center w-3/12 shrink-0 h-full">
                <ToggleDarkMode className=''/>
                <button className='bg-gray-900 hover:opacity-70 focus:opacity-50 p-4 my-4 rounded-3xl self-start' onClick={() => setIsSettingsMode(true)}>
                    <FcSettings className='text-xl'/>
                </button>
            </div>
            <div className="col flex flex-col gap-2 w-6/12 shrink-0 -translate-y-24">
                <Weather id='weather' className='dark:text-white'/>
                <DateAndClock id='dateAndClock' className='mb-6 dark:text-white' username={username}/>
                <SearchBox id='searchBox'/>
                <TopSites id='topSites' className='text-white'/>
            </div>
            <div className="col w-3/12 shrink-0">
                <Notes id='notes'/>
            </div>
        </div>
    )
}

export default App
