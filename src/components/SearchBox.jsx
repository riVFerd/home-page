import {useState} from "react";

const engines = [
    {
        id: 1,
        name: 'Bing',
        url: 'https://www.bing.com/search?q='
    },
    {
        id: 2,
        name: 'Google',
        url: 'https://www.google.com/search?q='
    }
];

const SearchBox = (props) => {
    const [input, setInput] = useState('');
    const [currentEngine, setCurrentEngine] = useState(engines[0]);

    const handleInputChange = (event) => setInput(event.target.value);

    const handleEngineChange = (event) => setCurrentEngine(engines.find(engine => engine.id.toString() === event.target.value));

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `${currentEngine.url+input.replace(/\s+/g, "+")}`;
    }

    return (
        <div id={props.id} className="">
            <form onSubmit={handleSubmit} className={'flex gap-2'}>
                <select className={'focus:outline-none rounded p-2 appearance-none text-center'} onChange={handleEngineChange}
                        defaultValue={currentEngine.id}>
                    {
                        engines.map((engine) => {
                            return <option key={engine.id} value={engine.id}>{engine.name}</option>
                        })
                    }
                </select>
                <input type="text" className={'focus:outline-none rounded px-4 py-2'} placeholder="Search..."
                       onChange={handleInputChange} value={input}/>
            </form>
        </div>
    )
}

export default SearchBox;