import { useState } from 'react';

const Variables = () => {
    const [inner, setInner] = useState(0);

    return (
        <div
            style={{
                margin: 20,
                border: '1px solid black',
            }}
        >
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
