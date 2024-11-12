import { useState } from 'react';

let state = 0;

const Variables = () => {
    const [inner, setInner] = useState(0);

    return (
        <div>
            <div>State: {state}</div>
            <div>Inner: {inner}</div>
            <button
                onClick={() => {
                    state++;
                    setInner(inner + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
};

export default Variables;
