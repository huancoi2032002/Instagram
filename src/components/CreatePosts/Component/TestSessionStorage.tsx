import React from 'react';
import useSessionStorage from '~/Hook/useSessionStorage';

const TestSessionStorage: React.FC = () => {
    const [data, setData] = useSessionStorage<string[]>('testKey', []);

    const handleAddData = () => {
        setData([...data, `Item ${data.length + 1}`]);
    };

    return (
        <div>
            <button onClick={handleAddData}>Add Data</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TestSessionStorage;
