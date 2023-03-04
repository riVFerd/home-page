import './App.css'
import DateAndClock from "./components/DateAndClock.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {

  return (
    <div className="Container flex flex-col gap-4">
        <DateAndClock id={'dateAndClock'}/>
        <SearchBox id={'searchBox'}/>
    </div>
  )
}

export default App
