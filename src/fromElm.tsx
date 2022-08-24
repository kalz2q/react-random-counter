import React, {useState, useEffect, useRef} from 'react';

const getRandomInt = (max) => 1 + Math.floor(Math.random() * Math.floor(max));

function App() {
    const [count, setCount] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        ref.current = getRandomInt(10);
    });

    return (<div>
        <p>Random countup: {count}</p>
        <button onClick={
            () => setCount(count + ref.current)
        }>random countup</button>
    </div>);
}

export default App;