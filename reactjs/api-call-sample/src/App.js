import React, {useState} from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponseData, setApiResponseData] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleClick = async () => {
        setIsLoading(true);
        try{
            await new Promise((resolve)=> setTimeout(resolve, 2000));
            setApiResponseData(true);
        } catch(e){
            setErrorMessage('Failed to load data. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <h3>Hello this is state management project </h3>
            <Button onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Click me'}
            </Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {apiResponseData && <p>Success! Data loaded successfully.</p>}
        </div>
    );
}

export default App;
