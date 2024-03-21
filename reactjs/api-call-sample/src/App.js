import React, {useState} from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
    const [isLoading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
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
            {/*<Button onClick={handleDataSet}>Checking states</Button>*/}
        </div>
    );
}

export default App;
