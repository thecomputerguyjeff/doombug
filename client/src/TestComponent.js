import React, {useState} from 'react';

const TestComponent = () => {
    const [data, setData] = useState('');
    const getData = () => {
        fetch('/api/v1/test')
            .then(r => {
                console.log(r); r.json()

            })
            .then(r => {
                console.log(r)
                setData(r)
            });
    }
    getData();
    return (
        <>
            {data}
        </>
    )
}

export default  TestComponent;