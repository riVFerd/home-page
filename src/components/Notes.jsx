import React, {useEffect, useState} from "react";
import {AiTwotoneSave} from "react-icons/ai";
import {BiHide, BiShowAlt} from "react-icons/bi";

const Notes = (props) => {
    const [notes, setNotes] = useState('');
    const [show, setShow] = useState(true);

    const handleNotesChange = (event) => setNotes(event.target.value);

    const saveNotes = () => {
        localStorage.setItem('notes', notes);
    };

    const showNotes = () => {
        setShow(!show);
        $('#notesBox').slideToggle();
        (show) ? $('#saveButton').slideUp() : $('#saveButton').slideDown();
    };

    useEffect(() => {
        // Load the counter state from localStorage when the component mounts
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes !== null) {
            setNotes(savedNotes);
        }
    }, []);

    return (
        <div id={props.id} className={'flex flex-col rounded-md bg-gray-600 ' + `${props.className}}`}>
            <div className="flex justify-between p-2">
                <h1 className='text-2xl'>Notes</h1>
                <div className='flex gap-2'>
                    <button id='saveButton' className='bg-gray-50 hover:bg-gray-300 p-2 rounded-md' onClick={saveNotes}>
                        <AiTwotoneSave className='text-xl text-black'/>
                    </button>
                    <button className='bg-gray-50 hover:bg-gray-300 p-2 rounded-md' onClick={showNotes}>
                        {
                            (show) ? <BiShowAlt className='text-xl text-black'/> : <BiHide className='text-xl text-black'/>
                        }
                    </button>
                </div>
            </div>
            <textarea id='notesBox' className={'h-80 w-full resize-none p-4 outline-none rounded-md ' } spellCheck='false' value={notes}
                      onChange={handleNotesChange}/>
        </div>
    )
}

export default Notes;