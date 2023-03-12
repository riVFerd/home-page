import './App.css'
import DateAndClock from "./components/DateAndClock.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Weather from "./components/Weather.jsx";
import Notes from "./components/Notes.jsx";

function App() {

    return (
        <div className='row flex justify-center items-center gap-4 px-12'>
            <div className="col w-3/12 shrink-0">
            </div>
            <div className="col flex flex-col gap-2 w-6/12 shrink-0 -translate-y-12">
                <Weather id='weather'/>
                <DateAndClock id='dateAndClock' className='mb-6'/>
                <SearchBox id='searchBox'/>
            </div>
            <div className="col w-3/12 shrink-0">
                <Notes id='notes'/>
            </div>
        </div>
    )
}

export default App
