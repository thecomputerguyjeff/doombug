const TestComponent = () => {
    let data = '';
    const getData = () => {
        fetch('/api/v1/test')
            .then(r => r.json())
            .then(r => data = r);
    }
    getData();
    return (
        <>
            {data}
        </>
    )
}

export default  TestComponent;