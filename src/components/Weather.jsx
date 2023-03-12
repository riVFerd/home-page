import {useEffect, useState} from "react";
import {BsDropletHalf} from "react-icons/bs";
import {FaTemperatureLow} from "react-icons/fa";
import {PropagateLoader} from "react-spinners";

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState();
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=malang&aqi=no`;

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setWeatherData(data.current);
        });
    }, []);

    return (
        <div id={props.id} className={'flex flex-col items-center gap-2'}>
            {
                (!weatherData)
                    ? <PropagateLoader color={'#87CEFA'} className={'mb-8'}/>
                    : <>
                        <img className={'w-[64px]'} src={weatherData['condition'].icon}/>
                        <div className={'flex gap-8'}>
                            <div className={'flex items-center gap-1'}>
                                <FaTemperatureLow/><span>{weatherData['temp_c']}°C</span></div>
                            <div className={'flex items-center gap-1'}>
                                <BsDropletHalf/><span>{weatherData['humidity']}%</span></div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Weather;