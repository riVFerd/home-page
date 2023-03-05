import './App.css'
import DateAndClock from "./components/DateAndClock.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {

    return (
        <div className="flex flex-col gap-8 -translate-y-16">
            <DateAndClock id={'dateAndClock'}/>
            <SearchBox id={'searchBox'}/>
        </div>
    )
}

export default App
