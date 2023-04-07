import {useEffect, useState} from "react";
import {BsDropletHalf} from "react-icons/bs";
import {FaTemperatureLow} from "react-icons/fa";
import {PropagateLoader} from "react-spinners";
import {gsap} from "gsap";

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState();
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const city = localStorage.getItem('city') ?? 'malang';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    const handleMouseOverWeatherIcon = () => {
        gsap.to('.temp-hidden', {
            scale: 1, visibility: 'visible', ease: "linear", delay: 0.2, duration: 0.5, onStart: () => {
                document.querySelectorAll('.temp-hidden').forEach(element => {
                    element.classList.remove('hidden');
                });
            }
        });
    }

    const handleMouseOutWeatherIcon = () => {
        gsap.to('.temp-hidden', {
            scale: 0, ease: "linear", duration: 0.5, onComplete: () => {
                document.querySelectorAll('.temp-hidden').forEach(element => {
                    element.classList.add('hidden');
                });
            }
        });
    }

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setWeatherData(data);
        });
    }, []);

    /*
     * Sets a timeout function that will trigger the handleMouseOutWeatherIcon function after one second.
     * This is done to hide the weather data when it is first loaded.
     */
    useEffect(() => {
        setTimeout(() => {
            handleMouseOutWeatherIcon();
        }, 1000);
    }, [weatherData]);

    return (<div id={props.id} className={'flex flex-col items-center gap-1 ' + props.className}>
            {(!weatherData) ? <PropagateLoader color={'#87CEFA'} className={'mb-8'}/> : <>
                <h1 className={'temp-hidden text-2xl font-bold absolute -top-12'}>
                    {weatherData['location'].name + ', ' + weatherData['location'].region}
                </h1>
                <img className={'w-[64px]'} onMouseOver={handleMouseOverWeatherIcon}
                     onMouseOut={handleMouseOutWeatherIcon} src={weatherData['current']['condition'].icon}/>
                <div className={'flex gap-4'}>
                    <div className={'flex items-center gap-1'}>
                        <FaTemperatureLow/><span>{weatherData['current']['temp_c']}°C</span>
                    </div>
                    <h1 className={'temp-hidden text-lg'}>{weatherData['current']['condition'].text}</h1>
                    <div className={'flex items-center gap-1'}>
                        <BsDropletHalf/><span>{weatherData['current']['humidity']}%</span>
                    </div>
                </div>
            </>}
        </div>)
}

export default Weather;