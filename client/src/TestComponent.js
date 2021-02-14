import React, {useState} from 'react';

const TestComponent = () => {
    const [data, setData] = useState('');
    const getData = () => {
        fetch('/api/v1/test')
            .then(r => r.json())
            .then(r => setData(r));
    }
    getData();
    return (
        <>
            {data}
        </>
    )
}

export default  TestComponent;