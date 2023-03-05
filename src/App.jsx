import './App.css'
import DateAndClock from "./components/DateAndClock.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Weather from "./components/Weather.jsx";

function App() {

    return (
        <div className="flex flex-col gap-2 -translate-y-16">
            <Weather id={'weather'}/>
            <DateAndClock id={'dateAndClock'} className={'mb-6'}/>
            <SearchBox id={'searchBox'}/>
        </div>
    )
}

export default App
