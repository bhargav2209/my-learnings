import React, {useState} from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
    const [data, setData] = useState();

    const handleDataSet = () => {
       setData('Data Details')
       console.log(data);
    }

    return (
    <div className="App">
      <h3>Hello this is state management project </h3>
      <Button onClick={handleDataSet}>Checking states</Button>
    </div>
    );
}

export default App;
