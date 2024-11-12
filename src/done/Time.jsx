import { useEffect, useRef, useState } from 'react';

const Time = () => {
    const timeRef = useRef();
    const times = useRef([]);
    const [refresh, setRefresh] = useState(new Date());

    useEffect(() => {
        const t = setInterval(() => {
            const time = new Date();
            times.current = [...times.current, time - timeRef.current];
            timeRef.current = time;
            setRefresh(new Date());
        }, 2000);

        return () => {
            clearInterval(t);
        };
    }, []);

    return (
        <div>
            {times.current.map((t, index) => (
                <div key={index}>{t}</div>
            ))}
        </div>
    );
};

export default Time;
