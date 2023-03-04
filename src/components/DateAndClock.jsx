import {useEffect, useState} from "react";

const DateAndClock = (props) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState({});

    const makeTwoDigits = (number) => number.toString().padStart(2, '0');

    useEffect(() => {
        setInterval(() => {
            const newDateTime = new Date();
            setDate(newDateTime.toLocaleDateString('en-UK', {
                day: '2-digit',
                weekday: 'long',
                month: 'long',
                year: 'numeric'
            }))
            setTime({
                hours: makeTwoDigits(newDateTime.getHours()),
                minutes: makeTwoDigits(newDateTime.getMinutes()),
                seconds: makeTwoDigits(newDateTime.getSeconds())
            })
        }, 1000);
    }, []);

    return (
        <div id={props.id} className={'container flex flex-col'}>
            <div id={'date'} className={''}>{date}</div>
            <div id={'clock'}>
                <p className={'text-4xl font-bold'}>
                    <span>{time.hours}</span>
                    <span className={'px-2'}>:</span>
                    <span>{time.minutes}</span>
                    <span className={'px-2'}>:</span>
                    <span>{time.seconds}</span>
                </p>
            </div>
        </div>
    );
}

export default DateAndClock;