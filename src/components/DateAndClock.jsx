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

const getUsername = () => {
    const username = localStorage.getItem('username');
    if (username) return username;
    localStorage.setItem('username', 'Virgy');
    return 'Virgy';
}

const DateAndClock = (props) => {
    const dateTime = new Date();
    const [date, setDate] = useState(getDate(dateTime));
    const [time, setTime] = useState(getTime(dateTime));
    const [greeting, setGreeting] = useState('Hello');

    useEffect(() => {
        setInterval(() => {
            const newDateTime = new Date()
            setDate(getDate(newDateTime))
            setTime(getTime(newDateTime))

            // change greeting based on time of day
            const currentHours = newDateTime.getHours();
            if (currentHours === time.hours) return; // don't update greeting if time hasn't changed
            switch (true) {
                case (currentHours >= 5 && currentHours < 10):
                    setGreeting("Good Morning");
                    break;
                case (currentHours >= 10 && currentHours < 15):
                    setGreeting("Good Afternoon");
                    break;
                case (currentHours >= 15 && currentHours < 19):
                    setGreeting("Good Evening");
                    break;
                default:
                    setGreeting("Good Night");
            }
        }, 1000);
    }, []);

    return (
        <div id={props.id} className={'container flex flex-col' + ` ${props.className}`}>
            <h1 className="text-2xl font-bold py-1">{greeting}, {getUsername()}</h1>
            <div id={'clock'}>
                <p className={'text-4xl font-bold'}>
                    <span>{time.hours}</span>
                    <span className={'px-2'}>:</span>
                    <span>{time.minutes}</span>
                    <span className={'px-2'}>:</span>
                    <span>{time.seconds}</span>
                </p>
            </div>
            <div id={'date'} className={''}>{date}</div>
        </div>
    );
}

export default DateAndClock;