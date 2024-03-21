import React, {useState} from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const shouldFail = Math.random() < 0.5;
            if (shouldFail) {
                setLoading(false);
                setError('Failed to load data. Please try again.');
            } else {
                setLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setError(null);
                }, 2000);
            }
        }, 2000);
    };


    // const [data, setData] = useState();
    // const handleDataSet = () => {
    //    setData('Data Details');
    //    console.log(data);
    // }


    return (
        <div className="App">
            <h3>Hello this is state management project </h3>
            <Button onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Click me'}
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isSuccess && <p>Success! Data loaded successfully.</p>}

            {/*<Button onClick={handleClick} disabled={isLoading}>*/}
            {/*    {isLoading ? 'Loading...' : 'Click me'}*/}
            {/*</Button>*/}
            {/*{isSuccess && <p>Success! Data loaded successfully.</p>}*/}

            {/*<Button onClick={handleClick} disabled={isLoading}>*/}
            {/*    {isLoading ? 'Loading...' : 'Click me'}*/}
            {/*</Button>*/}
            {/*<Button onClick={handleDataSet}>Checking states</Button>*/}
        </div>
    );
}

export default App;
