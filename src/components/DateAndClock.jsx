import {useEffect, useState} from "react";

const makeTwoDigits = (number) => number.toString().padStart(2, '0');

const getDate = (date) => {
    return date.toLocaleDateString('en-UK', {
        day: '2-digit',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    })
}

const getTime = (date) => {
    return {
        hours: makeTwoDigits(date.getHours()),
        minutes: makeTwoDigits(date.getMinutes()),
        seconds: makeTwoDigits(date.getSeconds())
    }
}

const DateAndClock = (props) => {
    const dateTime = new Date();
    const [date, setDate] = useState(getDate(dateTime));
    const [time, setTime] = useState(getTime(dateTime));

    useEffect(() => {
        setInterval(() => {
            const newDateTime = new Date()
            setDate(getDate(newDateTime))
            setTime(getTime(newDateTime))
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