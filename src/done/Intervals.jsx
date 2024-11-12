import { useEffect, useState } from 'react';

const Intervals = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef();

    useEffect(() => {
        if (!running) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            setTime(time + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [running]);

    return (
        <div>
            {time}
            <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
        </div>
    );
};

export default Intervals;
