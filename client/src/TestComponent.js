import React, {useState} from 'react';

const TestComponent = () => {
    const [data, setData] = useState('');
    const getData = () => {
        fetch(process.env.REACT_APP_BACKEND_URL+'api/v1/test')
            .then(r => r.json()

            )
            .then( ({hello}) =>
                setData(hello)
            );
    }
    getData();
    return (
        <>
            {data}
        </>
    )
}

export default  TestComponent;