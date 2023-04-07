import lampOffImg from './../assets/lamp_off.png';
import lampOnImg from './../assets/lamp_on.png';
import {useEffect, useState} from "react";

const ToggleDarkMode = (props) => {
    const [lampOn, setLampOn] = useState(localStorage.getItem('darkMode') === 'true');

    const handleLampSwitch = () => {
        setLampOn(!lampOn);
        localStorage.setItem('darkMode', (!lampOn).toString());
    }

    useEffect(() => {
        if (lampOn) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [lampOn])

    return (
        <div id={props.id} className={props.className + 'flex cursor-pointer hover:drop-shadow-lg hover:contrast-200'} onClick={handleLampSwitch}>
            <img src={(lampOn) ? lampOnImg : lampOffImg} alt="lamp image" className='h-48'/>
        </div>
    )
}

export default ToggleDarkMode;